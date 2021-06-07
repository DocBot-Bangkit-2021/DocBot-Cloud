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
      name: "Conjunctivitis",
      id: 1,
      icon: "https://storage.googleapis.com/health-info/disease/conjunctivitis.jpg",
      article: [
        {
          id: 1,
          name: "7 Pink Eye Symptoms You Shouldn’t Ignore",
          image: "https://storage.googleapis.com/health-info/disease/1.jpg",
          desc: "https://www.thehealthy.com/eye-care/pink-eye-symptoms/",     
        },
        {
          id: 2,
          name: "Do I Have Conjunctivitis (Pink Eye) or Keratitis?",
          image: "https://storage.googleapis.com/health-info/disease/2.jpg",
          desc: "https://health.usnews.com/conditions/eye-disease/conjunctivitis/articles/keratitis-vs-conjunctivitis",
        },
        {
          id: 3,
          name: "8 Common Myths About Pink Eye",
          image: "https://storage.googleapis.com/health-info/disease/3.jpg",
          desc: "https://www.everydayhealth.com/pink-eye/common-myths/",
        },
      ],
    },
    {
      name: "Cataracts",
      id: 2,
      icon: "https://storage.googleapis.com/health-info/disease/katarak.jpg",
      article: [
        {
          id: 1,
          name: "When Should an Individual Have Cataract Surgery?",
          image: "https://storage.googleapis.com/health-info/disease/katarak1.jpg",
          desc: "https://visionaware.org/your-eye-condition/cataracts/considering-cataract-surgery/",     
        },
        {
          id: 2,
          name: "A Visual Guide to Cataracts",
          image: "https://storage.googleapis.com/health-info/disease/katarak2.jpg",
          desc: "https://www.webmd.com/eye-health/cataracts/ss/slideshow-cataracts",
        },
        {
          id: 3,
          name: "Cataracts",
          image: "https://storage.googleapis.com/health-info/disease/katarak3.jpg",
          desc: "https://www.mayoclinic.org/diseases-conditions/cataracts/symptoms-causes/syc-20353790",
        },
      ],
    },
    {
      name: "Melanoma",
      id: 3,
      icon: "https://storage.googleapis.com/health-info/disease/melanoma.jpg",
      article: [
        {
          id: 1,
          name: "Advanced Melanoma: What to Expect",
          image: "https://storage.googleapis.com/health-info/disease/melanoma1.jpg",
          desc: "https://www.webmd.com/melanoma-skin-cancer/advanced-melanoma",     
        },
        {
          id: 2,
          name: "Melanoma",
          image: "https://storage.googleapis.com/health-info/disease/melanoma2.jpg",
          desc: "https://www.mayoclinic.org/diseases-conditions/melanoma/symptoms-causes/syc-20374884",
        },
        {
          id: 3,
          name: "Melanoma Facts: Answers to 10 Frequently Asked Questions",
          image: "https://storage.googleapis.com/health-info/disease/melanoma3.jpg",
          desc: "https://www.griswoldhomecare.com/blog/2018/may/melanoma-facts-answers-to-10-frequently-asked-qu/",
        },
      ],
    },
    {
      name: "Nail Fungus",
      id: 4,
      icon: "https://storage.googleapis.com/health-info/disease/nailfungus.jpg",
      article: [
        {
          id: 1,
          name: "Nail fungus Symptoms And Causes",
          image: "https://storage.googleapis.com/health-info/disease/nailfungus1.jpg",
          desc: "https://www.mayoclinic.org/diseases-conditions/nail-fungus/symptoms-causes/syc-20353294",     
        },
        {
          id: 2,
          name: "Nail fungus Diagnosis And Treatment",
          image: "https://storage.googleapis.com/health-info/disease/nailfungus2.jpg",
          desc: "https://www.mayoclinic.org/diseases-conditions/nail-fungus/diagnosis-treatment/drc-20353300",
        },
        {
          id: 3,
          name: "16 home remedies for toenail fungus",
          image: "https://storage.googleapis.com/health-info/disease/nailfungus3.jpg",
          desc: "https://www.singlecare.com/blog/home-remedies-for-toenail-fungus/",
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







