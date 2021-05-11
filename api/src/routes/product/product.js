const express = require("express")
const router = express.Router()
// var models = require('./models');
// const{ Product }= require('../../models/Product')
const {db, Product} = require('../../models/index')
router.use(express.json())

router.get("/", async (req,res)=>{
    // const product = await Product.findAll()
    // console.log(product)
    const holi = await Product.findAll()
    console.log(holi)
    res.send("holi")
})
router.get("/product", (req,res)=>{
    res.json("Devolver productos")
})

module.exports = router