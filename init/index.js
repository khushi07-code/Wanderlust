const mongoose=require("mongoose");
const Listing = require("../models/listing.js");
const initData=require("./data.js");

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");
}
main().then((res)=>{
    console.log(res,"res");
}).catch((err)=>{
    console.log(err,"err");
})

async function initDB(){
    await Listing.deleteMany({});
    initData.data=initData.data.map((obj)=>({...obj,owner:"68d81dc07849fa553189e212"}));
    await Listing.insertMany(initData.data);
    console.log("Database is reinitialized");
}
initDB();
