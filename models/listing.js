const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js");

const listingSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    profession : String,
    image : {
      url : String,
      filename : String,
    },
    price : Number,
    location : String,
    country : String,
    reviews : [
        {
            type : Schema.Types.ObjectId,
            ref : "Review",                 //reference model
        },
    ],
    owner : [
        {
            type : Schema.Types.ObjectId,
            ref : "User",                    //user model is a reference
        }
    ],
});


//mongoose middleware on deleting a listing also delete their reviews.
listingSchema.post("findOneAndDelete" , async(listing) =>{
    if(listing){
        await Review.deleteMany({_id : {$in : listing.reviews}});
    }
});
 
const Listing = mongoose.model("Listing" , listingSchema);
module.exports = Listing;