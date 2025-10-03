const mongoose=require("mongoose");
const {Schema}=mongoose;
const wanderlustDB = mongoose.connection.useDb('wanderlust');

const reviewSchema=new Schema({
    comment:String,
    rating:{
        type:Number,
        min:1,
        max:5
    },
    createdAt:{
        type:Date,
        default: Date.now(),
    },
    author:{
        type:Schema.Types.ObjectId,
        ref:"User"
    }
});
<<<<<<< HEAD
const wanderlustDB=mongoose.connection.useDb("wanderlust");
module.exports=wanderlustDB.model("Review",reviewSchema);
=======

module.exports=wanderlustDB.model("Review",reviewSchema);
>>>>>>> 7ad04cd0f502f55bc86e40bca3c83266df0203ea
