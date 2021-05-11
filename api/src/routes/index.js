const express = require("express");

const cors = require('cors');
const product = require('./product/product')

const router = express.Router()

router.use(cors())

router.use("/", product)


module.exports = router