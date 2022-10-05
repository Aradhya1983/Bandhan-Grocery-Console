const express = require("express")
const router = express.Router();
const storeService = require('../services/storeService.js')

let storeControl = []
storeControl.getAllStores = getAllStores
module.exports = storeControl;

//fetch all stores
async function getAllStores(){
    let stores = await storeService.getAllStores()
    return stores
}