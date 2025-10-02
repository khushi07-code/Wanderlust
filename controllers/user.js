const User=require("../models/user.js");

module.exports.signup=async(req,res,next)=>{
    try{
        const {username,email,password}=req.body;
        const newUser=new User({username,email});
        let registerUser=await User.register(newUser,password);
        req.login(registerUser,(err)=>{
            if(err){
                next(err);
            }
            req.flash("success","Welcome to wonderlust!");
            res.redirect("/listing");
        });
    }catch(e){
        req.flash("error",e.message);
        res.redirect("/listing");
    }
};

module.exports.login=async(req,res)=>{
    req.flash("success","Welcome to wonderlust!");
    if(res.locals.redirect){
        res.redirect(res.locals.redirect);
    }else{
        res.redirect("/listing");
    }
   
};