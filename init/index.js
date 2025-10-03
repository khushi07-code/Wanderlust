if(process.env.NODE_ENV!="production"){
    require("dotenv").config();
}
const mongoose=require("mongoose");
const Listing = require("../models/listing.js");
const initData=require("./data.js");

async function main(){
    await mongoose.connect(process.env.AltasDB);
}
main().then((res)=>{
    console.log(res,"res");
}).catch((err)=>{
    console.log(err,"err");
})
const adminId="";

async function initDB(){
    await Listing.deleteMany({});
    initData.data=initData.data.map((obj)=>({
        ...obj,
        owner: mongoose.Types.ObjectId.isValid(adminId)? new mongoose.Types.ObjectId(adminId) : undefined // or handle error
    }));
    await Listing.insertMany(initData.data);
    console.log("Database is reinitialized");
}
initDB();
