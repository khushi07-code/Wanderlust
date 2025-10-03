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
module.exports=wanderlustDB.model("User",userSchema);
