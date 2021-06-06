/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
// const CORS = require('cors')

const cors = require("cors");

const article = (req, res) => {
  const disease = [
    {
      name: "disease",
      icon: "https://storage.googleapis.com/health-info/disease/sakit.jpg",
      article: [
        {
          id: 1,
          name: "Jenis Batuk dan Risikonya",
          image: "https://storage.googleapis.com/health-info/disease/batuk.jpg",
          desc: "https://ciputrahospital.com/jenis-batuk-dan-risikonya/",     
        },
        {
          id: 2,
          name: "8 Gejala Demam Berdarah Yang Perlu Diwaspasdai",
          image: "https://storage.googleapis.com/health-info/disease/dbd.jpg",
          desc: "https://health.kompas.com/read/2020/12/09/060400468/8-gejala-demam-berdarah-dbd-yang-perlu-diwaspadai?page=all",
        },
        {
          id: 3,
          name: "Conjunctivitis (Pink Eye)",
          image: "https://storage.googleapis.com/health-info/disease/conjunctivitis.jpg",
          desc: "https://www.webmd.com/eye-health/eye-health-conjunctivitis",
        },
        {
          id: 4,
          name: "Mengungkap Kebenaran Mitos Asma yang Marak Beredar",
          image: "https://storage.googleapis.com/health-info/disease/asma.jpg",
          desc: "https://hellosehat.com/pernapasan/asma/mitos-asma/",
        },
        {
          id: 5,
          name: "Jenis Penyakit Kulit Menular dan Tidak Menular yang Umum",
          image: "https://storage.googleapis.com/health-info/disease/kulit.jpg",
          desc: "https://hellosehat.com/penyakit-kulit/jenis-penyakit-kulit/",
        },
      ],
    },
  ];

  if (req.method === "POST") {
    const category = req.body.category;
    if (!category) {
      res.status(401).send({ message: "category tidak boleh kosong" });
    }
    const result = disease.filter((item) => item.name === category);

    if (result.length <= 0) {
      res.status(404).send({ message: "category tidak ditemukan" });
    }
    res.status(200).send(result[0].article);
  }
  if (req.method === "GET") {
    res.status(200).send(disease);
  }
};

exports.main = (req, res) => {
  const corsFn = cors();
  corsFn(req, res, function () {
    article(req, res);
  });
};







