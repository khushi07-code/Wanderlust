const mongoose=require("mongoose");
const {Schema}=mongoose;
const wanderlustDB = mongoose.connection.useDb('wanderlust');
const User=require("./user.js");

const reviewSchema=new Schema({
    comment:{String},
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

module.exports=wanderlustDB.model("Review",reviewSchema);
