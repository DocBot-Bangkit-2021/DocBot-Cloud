/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
// const CORS = require('cors')

const cors = require("cors");

const article = (req, res) => {
  const covidinfo = {
    name: "Covid",
    icon: "https://storage.googleapis.com/health-info/Covid19/covid19.jpg",
    article: [
      {
        id: 1,
        name: "Peta Sebaran COVID-19",
        image: "https://storage.googleapis.com/health-info/Covid19/peta%20sebaran.jpg",
        desc: "Data positif berdasarkan provinsi, jenis kelamin, usia, gejala, dan komorbid bersumber dari update yang dikirimkan oleh Pusdatin Kementerian Kesehatan.",
        link: "https://covid19.go.id/peta-sebaran"       
      },
      {
        id: 2,
        name: "Ayah-Bunda Waspada! Infeksi Covid-19 pada Anak-anak Menggila",
        image: "https://storage.googleapis.com/health-info/Covid19/waspada%20covid%20pada%20anak.jpeg",
        desc: "Kasus positif Covid-19 pada anak mengalami peningkatan berdasarkan laporan beberapa negara. Misalnya saja Malaysia yang melaporkan per 31 Mei 2021 kasus Covid-19 pada anak sudah lebih dari 80 ribu kasus.",
        link: "https://www.cnbcindonesia.com/news/20210605172649-4-250827/ayah-bunda-waspada-infeksi-covid-19-pada-anak-anak-menggila",
      },
      {
        id: 3,
        name: "Standar amannya, pembelajaran tatap muka saat pandemi berakhir tapi...",
        image: "https://storage.googleapis.com/health-info/Covid19/tatap%20muka.jpg",
        desc: "Direktur Sekolah Dasar Ditjen Pendidikan Dasar dan Menengah Kemendikbud-Ristek Sri Wahyuningsih mengatakan, apabila berbicara standar keamanan sekolah dari risiko penularan Covid-19 maka pembelajaran tatap muka baru bisa dilakukan saat pandemi selesai.",
        link: "https://nasional.kontan.co.id/news/standar-amannya-pembelajaran-tatap-muka-saat-pandemi-berakhir-tapi",
      },
      {
        id: 4,
        name: "Seberapa lama tubuh Anda kebal terhadap infeksi Covid-19?",
        image: "https://storage.googleapis.com/health-info/Covid19/tubuh%20kebal.jpg",
        desc: "Mengutip dari Best Life (bestlifeonline.com), tubuh Anda bisa kebal terhadap Virus Corona kurang lebih selama satu tahun setelah Anda sembuh. Hasil penelitian itu dipublikasikan dalam Jurnal JAMA Internal Medicine.",
        link: "https://kesehatan.kontan.co.id/news/seberapa-lama-tubuh-anda-kebal-terhadap-infeksi-covid-19",
      },
      {
        id: 5,
        name: "Berhenti merokok bisa jadi pencegahan Covid-19, lo",
        image: "https://storage.googleapis.com/health-info/Covid19/rokok.jpg",
        desc: "Covid-19 adalah salah satu jenis penyakit yang menyerang sistem pernapasan. Nah, masalah itu bisa semakin parah saat Anda memiliki kebiasaan merokok.",
        link: "https://kesehatan.kontan.co.id/news/berhenti-merokok-bisa-jadi-pencegahan-covid-19-lo",
      },
    ],
  };

  if (req.method === "POST") {
    const category = req.body.category;
    if (!category) {
      res.status(401).send({ message: "category tidak boleh kosong" });
    }
    const result = covidinfo.filter((item) => item.name === category);

    if (result.length <= 0) {
      res.status(404).send({ message: "category tidak ditemukan" });
    }
    res.status(200).send(result[0].article);
  }
  if (req.method === "GET") {
    res.status(200).send(covidinfo);
  }
};

exports.main = (req, res) => {
  const corsFn = cors();
  corsFn(req, res, function () {
    article(req, res);
  });
};


