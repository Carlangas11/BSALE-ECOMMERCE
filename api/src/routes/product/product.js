const express = require("express")
const router = express.Router()
// var models = require('./models');
const{ Product }= require('../../models/Product')
router.use(express.json())

router.get("/", async (req,res)=>{
    const product = await Product.findAll()
    console.log(product)
    res.send("holi")
})
router.get("/product", (req,res)=>{
    res.send("ok")
})

module.exports = router