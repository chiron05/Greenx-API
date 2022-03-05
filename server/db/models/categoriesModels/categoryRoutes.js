const app = require("../../../app.js");

const potsModel = require("./potsModel");
const categoryModel = require("./categoriesModel");
const agriProductModel = require("./agriculturalProductModel");
const agriToolsModel = require("./agricultureToolsModel");
const booksModel = require("./booksModel");
const fruitsModel = require("./fruitsModel");
const seedsModel = require("./seedModel");
const spicesModel = require("./spicesModels");
const vegetablesModel = require("./vegetablesModels");

retriveAllCategoryItems = async () => {
  const potsObj = await potsModel.find();
  const agriProdObj = await agriProductModel.find();
  const agriToolsObj = await agriToolsModel.find();
  const fruitsObj = await fruitsModel.find();
  const seedsObj = await seedsModel.find();
  const spicesObj = await spicesModel.find();
  const vegetableObj = await vegetablesModel.find();

  const result = [
    { Pots: potsObj },
    { "Agricultural Products": agriProdObj },
    { "Agricultural Tools": agriToolsObj },
    { Fruits: fruitsObj },
    { Seeds: seedsObj },
    { Spices: spicesObj },
    { Vegetables: vegetableObj },
  ];

  console.log(result);

  return result;
};

categoryRoute = () => {
  app.post("/insertintopots", async (req, res) => {
    const pots = await potsModel.create(req.body);
    res.status(200).json(pots)
  });

  app.post("/insertintocategory", async (req, res) => {
    const category = await categoryModel.create(req.body);
    console.log(category);
  });

  app.post("/insertintoagriProductModel", async (req, res) => {
    const agriProducts = await agriProductModel.create(req.body);
    console.log(agriProducts);
  });

  app.post("/insertintoagriToolsModel", async (req, res) => {
    const agritools = await agriToolsModel.create(req.body);
    console.log(agritools);
  });

  app.post("/insertintobooksModel", async (req, res) => {
    const books = await booksModel.create(req.body);
    console.log(books);
  });

  app.post("/insertintofruitsModel", async (req, res) => {
    const fruits = await fruitsModel.create(req.body);
    console.log(fruits);
  });

  app.post("/insertintoseedsModel", async (req, res) => {
    const seeds = await seedsModel.create(req.body);
    console.log(seeds);
  });

  app.post("/insertintospicesModel", async (req, res) => {
    const spices = await spicesModel.create(req.body);
    console.log(spices);
  });

  app.post("/insertintovegetablesModel", async (req, res) => {
    const vegetables = await vegetablesModel.create(req.body);
    console.log(vegetables);
  });

  app.get("/getdata", async (req, res) => {
    const result = await categoryModel.find();
    res.send(result);
  });
};

exports.categoryRoute = categoryRoute;
exports.retriveAllCategoryItems = retriveAllCategoryItems;
