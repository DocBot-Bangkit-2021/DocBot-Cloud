import os
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

# Process image and predict label


def processFruitsImg(IMG_PATH):
    # load model
    model = load_model("./model_fruitsvegetables.h5", custom_objects={
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
    model = load_model("./model_disease.h5", custom_objects={
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

# Process images Diseases


@app.route("/covid", methods=["POST"])
def covidReq():
    if 'img' not in request.files:
        return jsonify({"error": "Image is empty"})
    data = request.files["img"]
    data.save("img.jpg")

    resp = processCovidImg("img.jpg")

    return jsonify({"result": resp})


if __name__ == "__main__":
    # app.run(debug=True, host="0.0.0.0", port=int(os.environ.get("PORT", 8080)))
    app.run(host="127.0.0.1", port=8080, debug=True)
