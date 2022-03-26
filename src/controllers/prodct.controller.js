const Product = require("../models/product.model")

const authentificate = require("../middleware/authintifcation")

const express = require("express")

const router = express.Router()

router.post("",authentificate ,async (req , res) =>
{

    console.log(req.user)
    req.body.userid = req.user._id
    try
    {
        const product = await Product.create(req.body)

        return res.send(product)
    }
    catch(err)
    {
        return res.send({message : err.message})
    }
})

router.get("", async(req, res) =>
{
    const product = await Product.find()

    res.send(product)
})

module.exports = router