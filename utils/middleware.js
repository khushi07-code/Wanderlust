const Listing=require("../models/listing.js");
const Review=require("../models/review.js");
const { reviewSchema }=require("../schema.js");
const { listingSchema }=require("../schema.js");
const expressError=require("../utils/expressError.js");


module.exports.isLoggedIn=(req,res,next)=>{
     if(!req.isAuthenticated()){
        req.session.redirectUrl=req.originalUrl;
        req.flash("error","you must be logged in to create listing.");
        res.redirect("/login");
    }else{
        next();
    }

};

module.exports.saveredirectUrl=(req,res,next)=>{
    if(req.session.redirectUrl){
        res.locals.redirect=req.session.redirectUrl;
    }
    next();
};
module.exports.isOwner=async (req,res,next)=>{
    let {id}=req.params;
    const listing= await Listing.findById(id);
    if(!listing.owner._id.equals(res.locals.currUser.id)){
        req.flash("error","you are not the owner of this list");
        return res.redirect(`/listing/${id}`);
    }
    next();
};

module.exports.validateReview=(req,res,next)=>{
    let {error}=reviewSchema.validate(req.body);
    console.log(error);
    if(error){
        let errMsg=error.details.map((el)=>el.message).join(",");
        throw new expressError(400,errMsg);
    }
    else{
        next();
    }
};

module.exports.validateListing=(req,res,next)=>{
    let {error}=listingSchema.validate(req.body);
    console.log(error);
    if(error){
        let errMsg=error.details.map((el)=>el.message).join(",");
        throw new expressError(400,errMsg);
    }
    else{
        next();
    }
};

module.exports.isReviewAuthor=async (req,res,next)=>{
    let {reviewId,id}=req.params;
    const review= await Review.findById(reviewId);
    if(!review.author._id.equals(res.locals.currUser.id)){
        req.flash("error","you are not the author of this list");
        return res.redirect(`/listing/${id}`);
    }
    next();
};

module.exports.isdestination=async(req,res,next)=>{
    if(req.query.destination){
        req.session.destination=req.query.destination
    }else{
        req.session.destination=""
    }
    next();
}