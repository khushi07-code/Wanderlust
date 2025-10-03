const mongoose=require("mongoose");
const {Schema}=mongoose;
const passportLocalMongoose = require("passport-local-mongoose");
const wanderlustDB = mongoose.connection.useDb('wanderlust');

const userSchema=new Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    }
});
userSchema.plugin(passportLocalMongoose);
<<<<<<< HEAD
const wanderlustDB=mongoose.connection.useDb("wanderlust");
module.exports=wanderlustDB.model("User",userSchema);
=======

module.exports=wanderlustDB.model("User",userSchema);
>>>>>>> 7ad04cd0f502f55bc86e40bca3c83266df0203ea
