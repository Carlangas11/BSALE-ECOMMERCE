const express = require("express")
const router = express.Router()
const {Product, Category} = require('../../db')

// const{ Product }= require('../../models/Product')

router.use(express.json())

router.get("/", async (req,res)=>{
    // const product = await Product.findAll()
    // console.log(product)
    const product = await Product.findAll({include: { model: Category, as: "category_info"}})

    res.json(product)
})
router.get("/product", (req,res)=>{
    res.json("Devolver productos")
})

module.exports = router