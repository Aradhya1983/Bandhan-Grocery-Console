const firestore = require('firebase/firestore')
const db = require('../Firebase/firebase-config.js')

//collection ref
const colRef = firestore.collection(db, 'bandhan_stores')

let storeService = {}
storeService.getAllStores = getAllStores
storeService.addStore = addStore

module.exports= storeService;

//collection data
async function getAllStores(){
    let stores=[]
    let snapshot = await firestore.getDocs(colRef)
    snapshot.docs.forEach((doc)=>{
        stores.push({...doc.data()})
    })
    return stores;
}
async function addStore(params){

}

