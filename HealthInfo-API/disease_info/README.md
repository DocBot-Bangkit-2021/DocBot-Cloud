# Articles API

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
