/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
// const CORS = require('cors')

const cors = require("cors");

const article = (req, res) => {
  const unitkesehataninfo = [
    {
      name: "Unit Kesehatan",
      icon: "https://storage.googleapis.com/health-info/unitkesehatan/puskesmas.jpg",
      article: [
        {
          id: 1,
          name: "Puskesmas Jati Makmur",
          image: "https://storage.googleapis.com/health-info/unitkesehatan/jatimakmur.jpg",
          address: "JL. Raya Klayan, Kel. Jati Makmur Kec. Pondok Gede, Komplek Jatiwaringin Asri, RT.003/RW.017, Jatimakmur, Kec. Pondokgede, Kota Bks, Jawa Barat 17413",
          contact:"+622184994466",       
        },
        {
          id: 2,
          name: "PHC UPTD Jatibening",
          image: "https://storage.googleapis.com/health-info/unitkesehatan/jatibening.jpg",
          address: "Jalan Amarilis, RT. 2 / RW. 12 Pondok Gede Jatibening Pondokgede RT.009, RT.009/RW.012, Jatibening, Kec. Pondokgede, Kota Bks, Jawa Barat 17412",
          contact:"+6281291851844",
        },
        {
          id: 3,
          name: "puskesmas Jatirahayu",
          image: "https://storage.googleapis.com/health-info/unitkesehatan/jatirahayu.jpg",
          address:"Jl. Poris Raya, RT.001/RW.018, Jatirahayu, Kec. Pd. Melati, Kota Bks, Jawa Barat 17414",
          contact:"+62218488737",
        },
      ],
    },
  ];

  if (req.method === "POST") {
    const category = req.body.category;
    if (!category) {
      res.status(401).send({ message: "category tidak boleh kosong" });
    }
    const result = unitkesehataninfo.filter((item) => item.name === category);

    if (result.length <= 0) {
      res.status(404).send({ message: "category tidak ditemukan" });
    }
    res.status(200).send(result[0].article);
  }
  if (req.method === "GET") {
    res.status(200).send(unitkesehataninfo);
  }
};

exports.main = (req, res) => {
  const corsFn = cors();
  corsFn(req, res, function () {
    article(req, res);
  });
};


