/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
// const CORS = require('cors')

const cors = require("cors");

const article = (req, res) => {
  const fruitnvege = [
    {
      name: "Banana",
      id: 1,
      vitamin: "kalsium, magnesium, fosfor, besi, vitamin A, C, B kompleks, B6",
      benefits: "sumber karbohidrat, perlancar metabolisme, meningkatkan kekebalan tubuh dan lain-lain",
      icon: "https://storage.googleapis.com/health-info/fruitandvege/banana.jpg",
      article: [
        {
          id: 1,
          name: "11 Evidence-Based Health Benefits of Bananas",
          image: "https://storage.googleapis.com/health-info/fruitandvege/10.jpg",
          desc: "https://www.healthline.com/nutrition/11-proven-benefits-of-bananas"       
        },
        {
          id: 2,
          name: "How Many Bananas Should You Eat per Day?",
          image: "https://storage.googleapis.com/health-info/fruitandvege/11.jpg",
          desc: "https://www.healthline.com/nutrition/how-many-bananas-a-day#nutrition",
        },
        {
          id: 3,
          name: "Are bananas good for weight loss?",
          image: "https://storage.googleapis.com/health-info/fruitandvege/12.jpg",
          desc: "https://www.pennmedicine.org/updates/blogs/metabolic-and-bariatric-surgery-blog/2019/april/are-bananas-good-for-weight-loss",
        },
      ],
    },
    {
      name: "Apple",
      id: 2,
      vitamin: "karbohidrat, serat, vitamin C, potasium, vitamin K, vitamin A, vitamin E, vitamin B1, vitamin B2, dan vitamin B6",
      benefits: "meningkatkan kinerja otak, memelihara kesehatan jantung, membangun kekebalan tubuh dan lain-lain",
      icon: "https://storage.googleapis.com/health-info/fruitandvege/apple.jpg",
      article: [
        {
          id: 1,
          name: "10 Impressive Health Benefits of Apples",
          image: "https://storage.googleapis.com/health-info/fruitandvege/apple%201.jpg",
          desc: "https://www.healthline.com/nutrition/10-health-benefits-of-apples",
        },
        {
          id: 2,
          name: "6 possible side effects of eating too many apples",
          image: "https://storage.googleapis.com/health-info/fruitandvege/apple%202.jpg",
          desc: "https://timesofindia.indiatimes.com/life-style/health-fitness/diet/6-possible-side-effects-of-eating-too-many-apples/photostory/80363064.cms",
        },
        {
          id: 3,
          name: "An Apple a Day Keeps the Doctor Away — Fact or Fiction?",
          image: "https://storage.googleapis.com/health-info/fruitandvege/apple%203.jpg",
          desc: "https://www.healthline.com/nutrition/an-apple-a-day-keeps-the-doctor-away",
        },
      ],
    },
    {
      name: "Orange",
      id: 3,
      vitamin: "kalium, vitamin C, vitamin B1, vitamin B9, kalsium",
      benefits: "mengatasi sariawan, menurunkan kolestrol, menetralisir tubuh dan lain-lain",
      icon: "https://storage.googleapis.com/health-info/fruitandvege/orange.jpg",
      article: [
        {
          id: 1,
          name: "Oranges",
          image: "https://storage.googleapis.com/health-info/fruitandvege/16.jpg",
          desc: "https://www.webmd.com/food-recipes/health-benefits-oranges",
        },
        {
          id: 2,
          name: "Oranges for weight loss: How this winter fruit can help you burn belly fat",
          image: "https://storage.googleapis.com/health-info/fruitandvege/17.jpg",
          desc: "https://www.timesnownews.com/health/article/oranges-for-weight-loss-how-this-winter-fruit-can-help-you-burn-belly-fat/526746",
        },
        {
          id: 3,
          name: "Healthy and Interesting Facts About Oranges",
          image: "https://storage.googleapis.com/health-info/fruitandvege/18.jpg",
          desc: "https://marketbasketfoods.com/healthy-and-interesting-facts-about-oranges/",
        },
      ],
    },
    {
      name: "Brocolli",
      id: 4,
      vitamin: "zat besi, kalsium, magnesium, vitamin A, B1, B2, B3, B5, B6, C, D, E, dan K",
      benefits: "detoksifikasi tubuh, meningkatkan sistem imunitas tubuh, menjaga kesehatan tulang dan jantung dan lain-lain",
      icon: "https://storage.googleapis.com/health-info/fruitandvege/brocolli.jpg",
      article: [
        {
          id: 1,
          name: "Eating too much of this can cause sexual dysfunction and mental retardation",
          image: "https://storage.googleapis.com/health-info/fruitandvege/brocolli%201.jpg",
          desc: "https://theriver973.iheart.com/featured/glenn/content/2019-11-12-eating-too-much-of-this-can-cause-sexual-dysfunction-and-mental-retardation/",
        },
        {
          id: 2,
          name: "Broccoli is bad for you, like, really toxic bad",
          image: "https://storage.googleapis.com/health-info/fruitandvege/brocolli%202.jpg",
          desc: "https://www.thinkingnutrition.com.au/broccoli-bad-for-you/",
        },
        {
          id: 3,
          name: "Top 14 Health Benefits of Broccoli",
          image: "https://storage.googleapis.com/health-info/fruitandvege/brocolli%203.jpg",
          desc: "https://www.healthline.com/nutrition/benefits-of-broccoli",
        },
      ],
    },
    {
      name: "Carrot",
      id: 5,
      vitamin: "zat besi, fosfor, kalsium, biotin, vitamin K1, vitamin B6, kalium, vitamin A",
      benefits: "menjaga kesehatan mata, kaya akan nutrisi, mencegah konstipasi, baik untuk otak dan lain-lain",
      icon: "https://storage.googleapis.com/health-info/fruitandvege/carrot.jpg",
      article: [
        {
          id: 1,
          name: "HOW TO PLANT, GROW, AND HARVEST CARROTS",
          image: "https://storage.googleapis.com/health-info/fruitandvege/carrot%201.jpg",
          desc: "https://www.almanac.com/plant/carrots#",
        },
        {
          id: 2,
          name: "Carrots",
          image: "https://storage.googleapis.com/health-info/fruitandvege/carrot%202.jpg",
          desc: "https://www.webmd.com/food-recipes/benefits-carrots",
        },
        {
          id: 3,
          name: "8 Impressive Benefits of Carrot Juice",
          image: "https://storage.googleapis.com/health-info/fruitandvege/carrot%203.jpg",
          desc: "https://www.healthline.com/nutrition/carrot-juice-benefits#1.-Highly-nutritious",
        },
      ],
    },
    {
      name: "Tomato",
      id: 6,
      vitamin: "vitamin A, vitamin C, vitamin K, kalium, folat, dan lycopene",
      benefits: "mencegah penyakit kanker, menurunkan tekanan darah, menjaga kesehatan jantung, melancarkan pencernaan dan lain-lain",
      icon: "https://storage.googleapis.com/health-info/fruitandvege/tomato.jpg",
      article: [
        {
          id: 1,
          name: "Is a Tomato a Fruit or a Vegetable?",
          image: "https://storage.googleapis.com/health-info/fruitandvege/tomato%201.jpg",
          desc: "https://www.britannica.com/story/is-a-tomato-a-fruit-or-a-vegetable",
        },
        {
          id: 2,
          name: "GROWING TOMATOES",
          image: "https://storage.googleapis.com/health-info/fruitandvege/tomato%202.jpg",
          desc: "https://www.almanac.com/plant/tomatoes",
        },
        {
          id: 3,
          name: "Everything you need to know about tomatoes",
          image: "https://storage.googleapis.com/health-info/fruitandvege/tomato%203.jpg",
          desc: "https://www.medicalnewstoday.com/articles/273031",
        },
      ],
    },
  ];

  if (req.method === "POST") {
    const category = req.body.category;
    if (!category) {
      res.status(401).send({ message: "category tidak boleh kosong" });
    }
    const result = fruitnvege.filter((item) => item.name === category);

    if (result.length <= 0) {
      res.status(404).send({ message: "category tidak ditemukan" });
    }
    res.status(200).send(result[0].article);
  }
  if (req.method === "GET") {
    res.status(200).send(fruitnvege);
  }
};

exports.main = (req, res) => {
  const corsFn = cors();
  corsFn(req, res, function () {
    article(req, res);
  });
};