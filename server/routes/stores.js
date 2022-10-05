const express = require("express")
const router = express.Router();
const storeControl = require('../controllers/storeControl')

router.use((req,res,next)=>{
    next()
})
router.post("/getAllStores", getAllStores)

module.exports = router;

//fetch all stores
async function getAllStores(req,res){
    let stores = await storeControl.getAllStores()
    res.json(stores)
}