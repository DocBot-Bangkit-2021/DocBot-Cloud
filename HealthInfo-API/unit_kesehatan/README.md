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
