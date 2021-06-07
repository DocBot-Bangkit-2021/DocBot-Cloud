# Articles API

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
