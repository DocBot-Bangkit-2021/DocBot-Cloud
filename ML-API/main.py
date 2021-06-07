import os
import pandas as pd
from flask import Flask, jsonify, request
from tensorflow.keras.preprocessing import image
from tensorflow.keras.models import load_model
import tensorflow_hub as tfhub
import numpy as np

from flask_cors import CORS

fruits_labels = {0: "apple", 1: "banana", 2: "broccoli",
                 3: "carrot", 4: "orange", 5: "tomato"}

disease_labels = {0: "cataracts", 1: "conjunctivitis",
                  2: "melanoma", 3: "nail_fungus"}

covid_labels = {0: "Suspected", 1: "SARS-CoV-2 Positive"}

# Process image and predict label


def processFruitsImg(IMG_PATH):
    # load model
    model = load_model("./ML-API/model_fruitsvegetables.h5", custom_objects={
                       'KerasLayer': tfhub.KerasLayer})

    img = image.load_img(IMG_PATH, target_size=(150, 150))
    x = image.img_to_array(img)
    x = np.expand_dims(x, axis=0)
    images = np.vstack([x])
    # because on train and test image is normalized, on image predict supposed to be too.
    images /= 255
    # the value is not always 1 and 0 because of probabilities
    classes = model.predict(images, 64)
    # use to check prediction that have higher probabilities
    predicted_class_indices = np.argmax(classes)
    value = "empty"
    if predicted_class_indices == 0:
        value = 'Apple'
    elif predicted_class_indices == 1:
        value = 'Banana'
    elif predicted_class_indices == 2:
        value = 'Broccoli'
    elif predicted_class_indices == 3:
        value = 'Carrot'
    elif predicted_class_indices == 4:
        value = 'Orange'
    else:
        value = 'Tomato'
    return value


def processDiseasesImg(IMG_PATH):
    # load model
    model = load_model("./ML-API/model_disease.h5", custom_objects={
                       'KerasLayer': tfhub.KerasLayer})

    img = image.load_img(IMG_PATH, target_size=(224, 224))
    x = image.img_to_array(img)
    x = np.expand_dims(x, axis=0)
    images = np.vstack([x])
    # because on train and test image is normalized, on image predict supposed to be too.
    images /= 255
    # the value is not always 1 and 0 because of probabilities
    classes = model.predict(images, 64)
    # use to check prediction that have higher probabilities
    predicted_class_indices = np.argmax(classes)
    value = "empty"
    if predicted_class_indices == 0:
        value = 'Cataracts'
    elif predicted_class_indices == 1:
        value = 'Conjunctivitis'
    elif predicted_class_indices == 2:
        value = 'Melanoma'
    else:
        value = 'Nail Fungus'
    return value


def processCovid(data):
    # load model
    model = load_model("./ML-API/model_covid19.h5", custom_objects={
                       'KerasLayer': tfhub.KerasLayer})

    print(data)
    predictions = model.predict(data)

    predicted_class_indices = np.where(predictions < 0.5, 0, 1)
    if predicted_class_indices == 0:
        value = 'Suspected'
    else:
        value = 'SARS-CoV-2 Positive'
    return value


# Initializing flask application
app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})


@app.route("/")
def main():
    return """
        Application is working
    """


# Process images Fruits and Vegetables
@app.route("/fruitsvegetables", methods=["POST"])
def fruitsvegetablesReq():
    if 'img' not in request.files:
        return jsonify({"error": "Image is empty"})
    data = request.files["img"]
    data.save("img.jpg")

    resp = processFruitsImg("img.jpg")

    return jsonify({"result": resp})

# Process images Diseases


@app.route("/diseases", methods=["POST"])
def diseaseReq():
    if 'img' not in request.files:
        return jsonify({"error": "Image is empty"})
    data = request.files["img"]
    data.save("img.jpg")

    resp = processDiseasesImg("img.jpg")

    return jsonify({"result": resp})

# Process Covid


@app.route("/covid", methods=["POST"])
def covidReq():
    items = ['age', 'gender', 'fever', 'cough', 'runny_nose', 'muscle_soreness',
             'pneumonia', 'diarrhea', 'lung_infection', 'travel_history',
             'isolation']
    items_cat = ['gender', 'fever', 'cough', 'runny_nose', 'muscle_soreness',
                 'pneumonia', 'diarrhea', 'lung_infection', 'travel_history', 'isolation']
    for item in items:
        if item not in request.form:
            msg = item + " is empty"
            return jsonify({"error": msg})

    gender = str(request.form['gender'])
    age = int(request.form['age'])
    age = (age - 1) / (96 - 1)
    fever = int(request.form['fever'])
    cough = int(request.form['cough'])
    runny_nose = int(request.form['runny_nose'])
    muscle_soreness = int(request.form['muscle_soreness'])
    pneumonia = int(request.form['pneumonia'])
    diarrhea = int(request.form['diarrhea'])
    lung_infection = int(request.form['lung_infection'])
    travel_history = int(request.form['travel_history'])
    isolation = int(request.form['isolation'])

    data_dummy = [age, "female" if gender == "male" else "female",
                  0 if fever == 1 else 1,
                  0 if cough == 1 else 1,
                  0 if runny_nose == 1 else 1,
                  0 if muscle_soreness == 1 else 1,
                  0 if pneumonia == 1 else 1,
                  0 if diarrhea == 1 else 1,
                  0 if lung_infection == 1 else 1,
                  0 if travel_history == 1 else 1,
                  0 if isolation == 1 else 1]

    data = [[age, gender,  fever, cough, runny_nose, muscle_soreness,
            pneumonia, diarrhea, lung_infection, travel_history,
            isolation], data_dummy]

    data_df = pd.DataFrame(data=data, columns=items)

    features_cat = pd.get_dummies(data_df[items_cat].astype('category'))
    features = pd.concat([data_df, features_cat], axis=1)
    features = features.drop(columns=items_cat).loc[[0], :]

    resp = processCovid(features)

    return jsonify({"result": resp})


if __name__ == "__main__":
    # app.run(debug=True, host="0.0.0.0", port=int(os.environ.get("PORT", 8080)))
    app.run(host="127.0.0.1", port=8080, debug=True)
