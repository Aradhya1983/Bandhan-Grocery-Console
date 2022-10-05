const express = require("express")
const router = express.Router();
const productControl = require('../controllers/productControl');

router.use((req,res,next)=>{
    next()
})
router.post("/getAllProducts", getAllProducts)

module.exports = router;

//fetch all stores
async function getAllProducts(req,res){
    let products = await productControl.getAllProducts()
    res.json(products)
}

async function addProduct(req,res){
    await productControl.addProduct(req.body)
}