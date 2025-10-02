const express=require("express");
const router=express.Router();
const User=require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const { saveredirectUrl } = require("../utils/middleware.js");
const { signup, login } = require("../controllers/user.js");


//signup route
router.route("/signup")
.get((req,res)=>{
    res.render("./users/signup.ejs");
})
.post(wrapAsync(signup));

//login form route
router.route("/login")
.get((req,res)=>{
    res.render("./users/login.ejs");
})
.post(saveredirectUrl,passport.authenticate("local",{failureRedirect:"/login",failureFlash:true}),wrapAsync(login));

//logout route
router.get("/logout",(req,res,next)=>{
    req.logout((err)=>{
        if(err){
            next(err);
        }else{
            req.flash("success","you successfully logout!");
            res.redirect("/listing");
        }
    })
});


module.exports=router;






