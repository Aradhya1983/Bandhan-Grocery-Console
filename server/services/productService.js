const firestore = require('firebase/firestore')
const db = require('../Firebase/firebase-config.js')

//collection ref
const colRef = firestore.collection(db, 'bandhan_products')

let productService = {}
productService.getAllProducts = getAllProducts
productService.addProduct = addProduct

module.exports = productService

//collection data
async function getAllProducts(){
    let stores=[]
    let snapshot = await firestore.getDocs(colRef)
    snapshot.docs.forEach((doc)=>{
        stores.push({...doc.data()})
    })
    return stores;
}

//add Prod Details
async function addProduct(params){
    params = params.item
    console.log("Success", params)
    // console.log(userId)
    // console.log("ADD",item)
    const docRef = await firestore.addDoc(colRef, {
        category: params.category,
        prod_code: params.prod_code,
        prod_discount: params.prod_discount,
        prod_id: params.prod_id,
        prod_img: params.prod_img,
        prod_name: params.prod_name,
        store_id: params.store_id
      });
      console.log("Document written with ID: ", docRef.id);
}


async function deleteProducts(){
    await firestore.deleteDoc(colRef);
}
