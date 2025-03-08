const express = require("express");
const router = express.Router({mergeParams : true});  //now it will also accept coming values in params in parent route(common route) like id
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/expressError.js");
const { reviewSchema } = require("../joiSchema.js");
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");
const {validateReview ,isLoggedIn ,isReviewAuthor} = require("../middleware.js");

const reviewController = require("../controllers/reviews.js");

//post route only needed
router.post("/",
    isLoggedIn,
    validateReview, 
    wrapAsync(reviewController.postReview));
  
  //delete review route.
router.delete("/:reviewId",
    isLoggedIn,
    isReviewAuthor,
    wrapAsync(reviewController.deleteReview));



  module.exports = router;