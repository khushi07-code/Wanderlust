const express=require("express");
const router=express.Router();
const Listing = require("../models/listing.js");
const wrapAsync=require("../utils/wrapAsync.js");
const { isLoggedIn, isOwner} = require("../utils/middleware.js");
const {validateListing}=require("../utils/middleware.js");
const {index, createNew, edit, update, deleteList, show}=require("../controllers/listings.js");
const multer  = require('multer');
const {storage}=require("../cloudConfig.js")
const upload = multer({ storage });



router.route("/")
.get(wrapAsync(index)) //index route
.post(isLoggedIn,validateListing,upload.single("listing[image][url]"),wrapAsync(createNew)); //create route


router.get("/new",isLoggedIn,(req,res)=>{
    res.render("./listings/new.ejs");
});   //new route




router.get("/:id/edit",isLoggedIn,isOwner,wrapAsync(edit)); //edit route

router.route("/:id")
.put(isLoggedIn,isOwner,validateListing,upload.single("listing[image][url]"),wrapAsync(update)) // update route
.delete(isLoggedIn,isOwner,wrapAsync(deleteList)) //delete route
.get(wrapAsync(show)); //show route

module.exports=router;