const Listing=require("../models/listing.js");
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const map_token=process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken:`${map_token}` });




module.exports.index=async(req,res)=>{
    let listings;
    const { category } = req.query;
    if (category && category.trim() !== ""){
        listings=await Listing.find({category});
    }else{
        listings=await Listing.find({});
    }
    console.log(listings);
    res.render("./listings/index.ejs",{listings});
};

module.exports.createNew=async(req,res,next)=>{
    const response=await geocodingClient.forwardGeocode({
            query: req.body.listing.location,
            limit: 2
        }) .send()
  
    const url=req.file.path;
    const filename=req.file.filename;
    const listing=req.body.listing;
    listing.owner=req.user._id;
    listing.image={url,filename};
    listing.geometry=response.body.features[0].geometry;
    await Listing.insertOne(listing);
    req.flash("success","new list created!");
    res.redirect("/listing");
};

module.exports.edit=async(req,res)=>{
    let {id}=req.params;
    const listing=await Listing.findById(id);
    if(!listing){
        req.flash("error","Listing you requested for edit does not exit!");
        res.redirect("/listing");
    }
    let originalImage=listing.image.url;
    originalImage=originalImage.replace("/upload","/upload/w_250");
    res.render("./listings/edit.ejs",{listing,originalImage});
};

module.exports.update=async(req,res)=>{
    let {id}=req.params;
    const listing=await Listing.findByIdAndUpdate(id,{...req.body.listing});
    if(typeof req.file!==undefined){
        const url=req.file.path;
        const filename=req.file.filename;
        listing.image={url,filename};
        listing.save();
    }
    req.flash("success","listing updated!");
    res.redirect(`/listing/${id}`);
};

module.exports.deleteList=async(req,res)=>{
    let {id}=req.params;
    await Listing.findByIdAndDelete(id);
    req.flash("success","listing deleted!");
    res.redirect("/listing");
};

module.exports.show=async(req,res)=>{
    let {id}=req.params;
    const listing=await Listing.findById(id).populate({path:'reviews',populate:{path:"author"}}).populate("owner");
    console.log(listing);

    if(!listing){
        req.flash("error","Listing you requested for does not exit!");
        res.redirect("/listing");
    }
    res.render("./listings/show.ejs",{listing});
};