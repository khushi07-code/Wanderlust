const Listing=require("../models/listing.js");
const Review=require("../models/review.js");
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const map_token=process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken:`${map_token}` });
const User=require("../models/user.js");
const {cloudinary}=require("../cloudConfig.js");


module.exports.index=async(req,res)=>{
    let listings;
const { category, destination } = req.query;

const filter = {};

if(destination && destination.trim() !== "") {
    const regex = new RegExp((destination.charAt(0).toUpperCase() + destination.slice(1)).trim(), "i");
    filter.$or = [
        { "location.city": regex },
        { "location.state": regex },
        { "location.country": regex }
    ];
    res.locals.filterquery.destination=destination;
}
if (category && category.trim() !== "") {
    filter.category = category.trim();
}
listings = await Listing.find(filter);
res.render("./listings/index.ejs", { listings });

};

module.exports.createNew=async(req,res,next)=>{
    const { city, state, country } = req.body.listing.location;

// Join into a single query string for Mapbox
    const locationQuery = `${city}, ${state}, ${country}`;

    const response=await geocodingClient.forwardGeocode({
            query: locationQuery,
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
    console.log("every thing");
    let listingData=req.body.listing;
    console.log(listingData,"hello");
    const updatedListing = await Listing.findByIdAndUpdate(id, listingData, {
    new: true,        // return the updated document
    runValidators: true // enforce schema validation
    });
   
    if(req.file){
        await cloudinary.uploader.destroy(updatedListing.image.filename);
        const url=req.file.path;
        const filename=req.file.filename;
        updatedListing.image={url,filename};
        updatedListing.save();
    }
    req.flash("success","listing updated!");
    res.redirect(`/listing/${id}`);
};

module.exports.deleteList=async(req,res)=>{
    let {id}=req.params;
    console.log("helloooooooo");
    const listing = await Listing.findById(id);
    console.log(listing,"done!");
    if (!listing) {
        req.flash("error", "Listing not found.");
        return res.redirect("/listing");
    }
  // Delete associated image from Cloudinary
   if (listing.image && listing.image.filename) {
    await cloudinary.uploader.destroy(listing.image.filename);
  }
    await Listing.findByIdAndDelete(id);
    req.flash("success","listing deleted!");
    res.redirect("/listing");
};

module.exports.show=async(req,res)=>{
    let {id}=req.params;
   const listing = await Listing.findById(id).lean(); // Use .lean() to allow modifications

  if (!listing) {
    req.flash("error", "Listing not found");
    return res.redirect("/listing");
  }

  // Step 2: Fetch owner manually
  const owner = await User.findById(listing.owner).lean();
  listing.owner = owner;

  // Step 3: Fetch reviews manually
  const reviews = await Review.find({ _id: { $in: listing.reviews } }).lean();

  // Step 4: For each review, fetch its author manually
  for (let review of reviews) {
    const author = await User.findById(review.author).lean();
    review.author = author;
  }

  // Step 5: Attach enriched reviews back to listing
  listing.reviews = reviews;

    console.log(listing,"hello");
    res.render("./listings/show.ejs",{listing});
};