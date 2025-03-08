const Review = require("../models/review");
const Listing = require("../models/listing");

module.exports.postReview = async(req,res) =>{
    let listing = await Listing.findById(req.params.id);
    let newReview = new Review(req.body.review);  //new review store in Review collection
    newReview.author = req.user._id;
    listing.reviews.push(newReview);  //review storing into an array of that listing individually.
  
    await newReview.save();
    await listing.save();
    
    // console.log("new review saved");
    req.flash("success", "New review created.");
    res.redirect(`/listings/${listing._id}`);
  }

module.exports.deleteReview = async(req,res)=>{
    let {id , reviewId} = req.params;
    await Listing.findByIdAndUpdate(id , {$pull : {reviews : reviewId}});  //deleting that review also from listings---> reviews array using pull operator in mongoose that firstly search for exact match and then pull out.
    await Review.findByIdAndDelete(reviewId);
    req.flash("success", "Review Deleted Successfully");
    res.redirect(`/listings/${id}`);
  }  