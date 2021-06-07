<h1 align="center">
  <img align="center" src="/misc/img/icon.png"  width="270"></img>
<br>
DocBot
</h1>

# Profile

### Team ID : B21-CAP0362

### Members

* M2082044 - [Nur Imam Masri](https://github.com/nurimammasri)
* M2242154 - [Rafkah Rizqia](https://github.com/rafkahrizqia)
* A0131304 - [Dian Arisma Wicakso](https://github.com/dianarisma86)
* A0141345 - [I Made Ari Widiarsana](https://github.com/widiar)
* C2242155 - [Nurul Uswatun Hasanah](https://github.com/nuruluswatun)

### Roles/personnel

* Project Plan (M2082044 - Nur Imam Masri)
* UI/UX (C2242155 - Nurul Uswatun Hasanah, M2242154 - Rafkah Rizqia)
* Build Machine Learning Model (M2082044 - Nur Imam Masri, M2242154 - Rafkah Rizqia)
* Android Development (A0131304 - Dian Arisma Wicakso, A0141345 - I Made Ari Widiarsana)
* Deployment Application (C2242155 - Nurul Uswatun Hasanah)


[![GitHub stars](https://img.shields.io/github/stars/DocBot-Bangkit-2021/DocBot-MachineLearningModels)](https://github.com/DocBot-Bangkit-2021/DocBot-MachineLearningModels)
[![GitHub forks](https://img.shields.io/github/forks/DocBot-Bangkit-2021/DocBot-MachineLearningModels)](https://github.com/DocBot-Bangkit-2021/DocBot-MachineLearningModels)

# DocBot-ML
This project is our final project for Google Bangkit Academy 2021.

**Machine Learning:**
[DocBot-ML](https://github.com/DocBot-Bangkit-2021/DocBot-MachineLearningModels)

**Android:**
[DocBotApp](https://github.com/DocBot-Bangkit-2021/DocBotApp)

## Features

- [x] ML-API Deployment
- [x] Health-Info
  - [x] Disease Info
  - [x] Fruits and Vegetables Info
  - [x] Covid Info
  - [x] Health Unit (Puskesmas, Rumah Sakit, ...)


# API for ML

**Deploy use** : Cloud Run Google CLoud Flatform

## TEST THE API

**URL** : `https://docbotml-api-**********-et.a.run.app`

**Method** : `GET`

**Auth required** : NO

### Success Response

**Condition** : If everything is OK.

**Code** : `200`

**Content example**

```
Application is working

```

## PREDICT THE IMAGE FOR DISEASES AND FRUITSVEGETABLES

**URL Diseases** : `https://docbotml-api-**********-et.a.run.app`

**URL Fruits Vegetables** : `https://docbotml-api-**********-et.a.run.app/process`

**Method** : `POST`

**Auth required** : NO

**Data must provided**

Provide image to be predict with key "img".

**Data example**
All fields must be sent.

```
const formdata = new Formdata()
formdata.append("img" , <image file>)

body : formdata
```

### Success Response

**Condition** : If everything is OK.

**Code** : `200`

**Content example**

```json
{
  "result": "banana"
}
```

### Referensi

- [faizan170/tensorflow-image-classification-flask-deployment](https://github.com/faizan170/tensorflow-image-classification-flask-deployment "faizan170's Github profile")
- [how-to-deploy-a-simple-flask-app-on-cloud-run-with-cloud-endpoint](https://medium.com/fullstackai/how-to-deploy-a-simple-flask-app-on-cloud-run-with-cloud-endpoint-e10088170eb7 "simple-flask-app-on-cloud-run")

# Articles COVID19 API

## get all info covid

get data health info for covid

**URL** : `https://asia-southeast2-light-maker-******.cloudfunctions.net/covidinfo`

**Method** : `GET`

**Auth required** : NO

**No Data must provided**

## Success Response

**Condition** : If everything is OK.

**Code** : `200`

**Content example**

```json
{
      "name": "Covid",
      "icon": "https://storage.googleapis.com/health-info/Covid19/covid19.jpg",
      "article": [
        {
          "id": 1,
          "name": "Peta Sebaran COVID-19",
          "image": "https://storage.googleapis.com/health-info/Covid19/peta%20sebaran.jpg",
          "desc": "https://covid19.go.id/peta-sebaran"       
        },
        {
          "id": 2,
          "name": "Ayah-Bunda Waspada! Infeksi Covid-19 pada Anak-anak Menggila",
          "image": "https://storage.googleapis.com/health-info/Covid19/waspada%20covid%20pada%20anak.jpeg",
          "desc": "https://www.cnbcindonesia.com/news/20210605172649-4-250827/ayah-bunda-waspada-infeksi-covid-19-pada-anak-anak-menggila",
        },
        ...
      ],
    },
```

&nbsp;
&nbsp;

# GET all articles Covid19

get all articles for Covid19

**URL** : `https://asia-southeast2-light-maker-******.cloudfunctions.net/covidinfo`

**Method** : `POST`

**Auth required** : NO

**Data must provided**

Provide CATEGORY to be search.

**Data example** All fields must be sent.

```json
{
  "category": "Covid"
}
```

## Success Response

**Condition** : If everything is OK.

**Code** : `200`

**Content example**

```json
[
    {
      "id": 1,
      "name": "Peta Sebaran COVID-19",
      "image": "https://storage.googleapis.com/health-info/Covid19/peta%20sebaran.jpg",
      "desc": "https://covid19.go.id/peta-sebaran"       
    },
    {
      "id": 2,
      "name": "Ayah-Bunda Waspada! Infeksi Covid-19 pada Anak-anak Menggila",
      "image": "https://storage.googleapis.com/health-info/Covid19/waspada%20covid%20pada%20anak.jpeg",
      "desc": "https://www.cnbcindonesia.com/news/20210605172649-4-250827/ayah-bunda-waspada-infeksi-covid-19-pada-anak-anak-menggila",
    },
    {
      "id": 3,
      "name": "Standar amannya, pembelajaran tatap muka saat pandemi berakhir tapi...",
      "image": "https://storage.googleapis.com/health-info/Covid19/tatap%20muka.jpg",
      "desc": "https://nasional.kontan.co.id/news/standar-amannya-pembelajaran-tatap-muka-saat-pandemi-berakhir-tapi",
    },
    ...
]
```

# Articles Diseases API

## get all info diseases

get data health info for diseases

**URL** : `https://asia-southeast2-light-maker-******.cloudfunctions.net/disease_info`

**Method** : `GET`

**Auth required** : NO

**No Data must provided**

## Success Response

**Condition** : If everything is OK.

**Code** : `200`

**Content example**

```json
    {
      "name": "Conjunctivitis",
      "id": 1,
      "icon": "https://storage.googleapis.com/health-info/disease/conjunctivitis.jpg",
      "article": [
        {
          "id": 1,
          "name": "7 Pink Eye Symptoms You Shouldn’t Ignore",
          "image": "https://storage.googleapis.com/health-info/disease/1.jpg",
          "desc": "https://www.thehealthy.com/eye-care/pink-eye-symptoms/",     
        },
        ...
      ],
    },
    {
      "name": "Cataracts",
      "id": 2,
      "icon": "https://storage.googleapis.com/health-info/disease/katarak.jpg",
      "article": [
        {
          "id": 1,
          "name": "When Should an Individual Have Cataract Surgery?",
          "image": "https://storage.googleapis.com/health-info/disease/katarak1.jpg",
          "desc": "https://visionaware.org/your-eye-condition/cataracts/considering-cataract-surgery/",     
        },
        ...
      ],
    },
    ...
```

&nbsp;
&nbsp;

# GET one category

get all data articles diseases for ONE category

**URL** : `https://asia-southeast2-light-maker-******.cloudfunctions.net/disease_info`

**Method** : `POST`

**Auth required** : NO

**Data must provided**

Provide CATEGORY to be search.

**Data example** All fields must be sent.

```json
{
  "category": "Cataracts"
}
```

## Success Response

**Condition** : If everything is OK.

**Code** : `200`

**Content example**

```json
    {
      "name": "Cataracts",
      "id": 2,
      "icon": "https://storage.googleapis.com/health-info/disease/katarak.jpg",
      "article": [
        {
          "id": 1,
          "name": "When Should an Individual Have Cataract Surgery?",
          "image": "https://storage.googleapis.com/health-info/disease/katarak1.jpg",
          "desc": "https://visionaware.org/your-eye-condition/cataracts/considering-cataract-surgery/",     
        },
        {
          "id": 2,
          "name": "A Visual Guide to Cataracts",
          "image": "https://storage.googleapis.com/health-info/disease/katarak2.jpg",
          "desc": "https://www.webmd.com/eye-health/cataracts/ss/slideshow-cataracts",
        },
        {
          "id": 3,
          "name": "Cataracts",
          "image": "https://storage.googleapis.com/health-info/disease/katarak3.jpg",
          "desc": "https://www.mayoclinic.org/diseases-conditions/cataracts/symptoms-causes/syc-20353790",
        },
      ],
    },
```

# Articles Fruits and Vegetables API

## get all info fruits and vegetables

get data health info for fruits and vegetables

**URL** : `https://asia-southeast2-light-maker-******.cloudfunctions.net/fruitvege_info`

**Method** : `GET`

**Auth required** : NO

**No Data must provided**

## Success Response

**Condition** : If everything is OK.

**Code** : `200`

**Content example**

```json
    {
      "name": "Banana",
      "id": 1,
      "icon": "https://storage.googleapis.com/health-info/fruitandvege/banana.jpg",
      "article": [
        {
          "id": 1,
          "name": "11 Evidence-Based Health Benefits of Bananas",
          "image": "https://storage.googleapis.com/health-info/fruitandvege/10.jpg",
          "desc": "https://www.healthline.com/nutrition/11-proven-benefits-of-bananas"       
        },
        ...
      ],
    },
    {
      "name": "Apple",
      "id": 2,
      "icon": "https://storage.googleapis.com/health-info/fruitandvege/apple.jpg",
      "article": [
        {
          "id": 1,
          "name": "10 Impressive Health Benefits of Apples",
          "image": "https://storage.googleapis.com/health-info/fruitandvege/apple%201.jpg",
          "desc": "https://www.healthline.com/nutrition/10-health-benefits-of-apples",
        },
        ...
      ],
    },
    ...
```

&nbsp;
&nbsp;

# GET one category

get all data articles fruits and vegetables for ONE category

**URL** : `https://asia-southeast2-light-maker-******.cloudfunctions.net/fruitvege_info`

**Method** : `POST`

**Auth required** : NO

**Data must provided**

Provide CATEGORY to be search.

**Data example** All fields must be sent.

```json
{
  "category": "Apple"
}
```

## Success Response

**Condition** : If everything is OK.

**Code** : `200`

**Content example**

```json
    {
      "name": "Apple",
      "id": 2,
      "icon": "https://storage.googleapis.com/health-info/fruitandvege/apple.jpg",
      "article": [
        {
          "id": 1,
          "name": "10 Impressive Health Benefits of Apples",
          "image": "https://storage.googleapis.com/health-info/fruitandvege/apple%201.jpg",
          "desc": "https://www.healthline.com/nutrition/10-health-benefits-of-apples",
        },
        {
          "id": 2,
          "name": "6 possible side effects of eating too many apples",
          "image": "https://storage.googleapis.com/health-info/fruitandvege/apple%202.jpg",
          "desc": "https://timesofindia.indiatimes.com/life-style/health-fitness/diet/6-possible-side-effects-of-eating-too-many-apples/photostory/80363064.cms",
        },
        {
          "id": 3,
          "name": "An Apple a Day Keeps the Doctor Away — Fact or Fiction?",
          "image": "https://storage.googleapis.com/health-info/fruitandvege/apple%203.jpg",
          "desc": "https://www.healthline.com/nutrition/an-apple-a-day-keeps-the-doctor-away",
        },
      ],
    },
```

# Unit Kesehatan API

## get all info unit kesehatan

get data health info for unit kesehatan

**URL** : `https://asia-southeast2-light-maker-******.cloudfunctions.net/unit_kesehatan`

**Method** : `GET`

**Auth required** : NO

**No Data must provided**

## Success Response

**Condition** : If everything is OK.

**Code** : `200`

**Content example**

```json
{
      "name": "Unit Kesehatan",
      "icon": "https://storage.googleapis.com/health-info/unitkesehatan/puskesmas.jpg",
      "article": [
        {
          "id": 1,
          "name": "Puskesmas Jati Makmur",
          "image": "https://storage.googleapis.com/health-info/unitkesehatan/jatimakmur.jpg",
          "address": "JL. Raya Klayan, Kel. Jati Makmur Kec. Pondok Gede, Komplek Jatiwaringin Asri, RT.003/RW.017, Jatimakmur, Kec. Pondokgede, Kota Bks, Jawa Barat 17413",
          "contact":"+622184994466",       
        },
        {
          "id": 2,
          "name": "PHC UPTD Jatibening",
          "image": "https://storage.googleapis.com/health-info/unitkesehatan/jatibening.jpg",
          "address": "Jalan Amarilis, RT. 2 / RW. 12 Pondok Gede Jatibening Pondokgede RT.009, RT.009/RW.012, Jatibening, Kec. Pondokgede, Kota Bks, Jawa Barat 17412",
          "contact":"+6281291851844",
        },
        ...
      ],
    },
```

&nbsp;
&nbsp;

# GET all bio unit kesehatan

get all bio unit kesehatan

**URL** : `https://asia-southeast2-light-maker-******.cloudfunctions.net/unit_kesehatan`

**Method** : `POST`

**Auth required** : NO

**Data must provided**

Provide CATEGORY to be search.

**Data example** All fields must be sent.

```json
{
  "category": "Unit Kesehatan"
}
```

## Success Response

**Condition** : If everything is OK.

**Code** : `200`

**Content example**

```json
[
    {
      "id": 1,
      "name": "Puskesmas Jati Makmur",
      "image": "https://storage.googleapis.com/health-info/unitkesehatan/jatimakmur.jpg",
      "address": "JL. Raya Klayan, Kel. Jati Makmur Kec. Pondok Gede, Komplek Jatiwaringin Asri, RT.003/RW.017, Jatimakmur, Kec. Pondokgede, Kota Bks, Jawa Barat 17413",
      "contact":"+622184994466",       
    },
    {
      "id": 2,
      "name": "PHC UPTD Jatibening",
      "image": "https://storage.googleapis.com/health-info/unitkesehatan/jatibening.jpg",
      "address": "Jalan Amarilis, RT. 2 / RW. 12 Pondok Gede Jatibening Pondokgede RT.009, RT.009/RW.012, Jatibening, Kec. Pondokgede, Kota Bks, Jawa Barat 17412",
      "contact":"+6281291851844",
    },
    {
      "id": 3,
      "name": "puskesmas Jatirahayu",
      "image": "https://storage.googleapis.com/health-info/unitkesehatan/jatirahayu.jpg",
      "address":"Jl. Poris Raya, RT.001/RW.018, Jatirahayu, Kec. Pd. Melati, Kota Bks, Jawa Barat 17414",
      "contact":"+62218488737",
    },
    ...
]
```



## Error Responses

**Condition** : If category is empty.

**Code** : `401`

**Content**

```json
{
  "message": "category tidak boleh kosong"
}
```

**Condition** : If category not faound.

**Code** : `404`

**Content**

```json
{
  "message": "category tidak ditemukan"
}
```

**Condition** : If something wrong.

**Code** : `404`
