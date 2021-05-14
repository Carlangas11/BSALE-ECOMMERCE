const express = require("express");
const router = express.Router();
const { Product, Category } = require("../../db");
// const ejs = require('ejs');
router.use(express.json());

router.get("/", async (req, res) => {
  const filter = req.query.name;
  const categories = await Category.findAll();
  console.log(filter);
  if (!filter) {
    const products = await Product.findAll({
      include: { model: Category, as: "category_info" },
    });
    
    // console.log(categories.map(c => c.dataValues))
    res.render("index", { data: products, categories: categories });
  } else {
    const products = await Product.findAll({
      include: { model: Category,where:{name: filter},  as: "category_info" },
    });
    res.render("index", { data: products, categories: categories });
  }
});




router.get("/product", (req, res) => {
  res.json("Devolver productos");
});

router.use((err, req, res, next) => {
  const message = err.message || err;
  console.error(err);
  res.status(404).render("404", { title: "404", description: message });
});
module.exports = router;
