const express = require("express");
const router = express.Router();
const { Product, Category } = require("../../db");
// const ejs = require('ejs');
router.use(express.json());

router.get("/", async (req, res) => {
  const filter = req.query.name;
  const search = req.query.search;
  const categories = await Category.findAll();
  console.log(filter);
  if (!filter) {
    const products = await Product.findAll({
      include: { model: Category, as: "category_info" },
    });

    // console.log(products.map(c => c.dataValues))
    // console.log(categories.map(c => c.dataValues))
    res.render("index", { data: products, categories: categories });
  } else if(!search){
    const products = await Product.findAll({
      include: { model: Category,where:{name: filter},  as: "category_info" },
    });
    res.render("index", { data: products, categories: categories });
  }
});




router.get("/orderDetail", async(req, res) => {
  const categories = await Category.findAll();
  res.render("order",{ categories: categories });
});



router.use(async(err, req, res, next) => {
  const categories = await Category.findAll();
  const message = err.message || err;
  console.error(err);
  res.status(404).render("404", { title: "404", description: message,categories: categories });
});
module.exports = router;
