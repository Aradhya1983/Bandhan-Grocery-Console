const express = require("express")
const productService = require('../services/productService.js')

let productControl = []
productControl.getAllProducts = getAllProducts
productControl.addProduct = addProduct

module.exports = productControl;

//fetch all stores
async function getAllProducts(){
    let products = await productService.getAllProducts()
    return products
}
async function addProduct(params){
    await productService.addProduct(params)
    console.log("Success")
}