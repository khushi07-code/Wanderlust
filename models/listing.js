const mongoose=require("mongoose");
const { Schema }=mongoose;
const Review=require("./review.js");
const User=require("./user.js");
const wanderlustDB = mongoose.connection.useDb('wanderlust');

const listingSchema= new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    image:{
        url:{
            type:String,
            // default:"https://plus.unsplash.com/premium_photo-1669357657874-34944fa0be68?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            // set:(v)=>v===""
            // ? "https://plus.unsplash.com/premium_photo-1669357657874-34944fa0be68?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            // : v
        },
        filename:{
            type:String
        }
    },
    price:{
        type:Number,
        required:true
    },
    location:{
        city:{type:String,require:true},
        state:{type:String,required:true},
        country:{type:String,default:"India",required:true}
    },
    reviews:[
        {
            type: Schema.Types.ObjectId,
            ref:"Review"
        }
    ],
    owner:{
        type: Schema.Types.ObjectId,
        ref:"User"
    },
    geometry: {
        type:{
            type: String, // Don't do `{ location: { type: String } }`
            enum: ['Point'], // 'location.type' must be 'Point'
            required: true
        },
        coordinates: {
            type: [Number],
            required: true
        }
    },
    category:{
        type:String,
        enum:["room","iconic city","castle","amazing pool","amazing view","mountain","farm","trending","dom","boat","arctic","camp"],
        required:true
    }


});

listingSchema.post('findOneAndDelete',async(listing)=>{
    if(listing){
        await Review.deleteMany({_id:{$in :listing.reviews}});
    }
})

const Listing=wanderlustDB.model("Listing",listingSchema);
module.exports=Listing;
