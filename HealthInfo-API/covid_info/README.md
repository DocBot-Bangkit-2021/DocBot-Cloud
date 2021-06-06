# Recomendation API

## get all info covid

gat data health info for covid

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
