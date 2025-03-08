//for authorization ----> user must be logged in to access some features.   
//so we create a middleware that can be used easily in every needed route.


const ExpressError = require("./utils/expressError.js");
const { listingSchema , reviewSchema } = require("./joiSchema.js");

const Listing = require("./models/listing.js");
const Review = require("./models/review.js");


//joiSchema error handling. function for middleware.
//validating listingSchema
module.exports.validateListing = (req,res,next) =>{
    let {error} = listingSchema.validate(req.body);     //now it will validate all conditions.                      
    if(error){
      let errMsg = error.details.map((el) => el.message).join(",");  //readable error
      throw new ExpressError(400 , errMsg);
    }else{
      next();
    }
  }



  //validating reviewschema form
module.exports.validateReview = (req,res,next) =>{
    let {error} = reviewSchema.validate(req.body);     //now it will validate all conditions.                      
    if(error){
      let errMsg = error.details.map((el) => el.message).join(",");  //readable error
      throw new ExpressError(400 , errMsg);
    }else{
      next();
    }
  }





















module.exports.isLoggedIn = (req,res,next) => {
    if(!req.isAuthenticated()){           //a passport method that ensure the user is logged in during the session or not.
        console.log(req.originalUrl)
        req.session.redirectUrl = req.originalUrl;  //return the complete url(path) from where we are requested for but due to not loggedin we go to the login page ,,,, why this---? ---------> now we are able to redirect to just previous url from where user wanna to perform action but due to not loggedin they had to login first , (ex:- user is not login now -----> create new ---> login ----> create/new (instead of /listings))  for better experience.      we store this in a session so that every other routes can also use the variable.
        req.flash("error" , "you must be logged in first !");
        return res.redirect("/users/login");
      }
      next();
}

module.exports.saveRedirectUrl = (req,res,next) =>{
    if(req.session.redirectUrl){
        res.locals.redirectUrl = req.session.redirectUrl;    //actually whenever a user login successfully then the passport reset the session and then it will also deleted so that we store them as locals variable coz passport don't have access for this and can be used everywhere ---------------use in --------> login route for redirecting.
    }
    next();
}

module.exports.isOwner = async (req,res,next) =>{
    let {id} = req.params;
    let listing = await Listing.findById(id);    // for authorization
    if((res.locals.currUser) && (!listing.owner[0]._id.equals(res.locals.currUser._id))){
      req.flash("error" , "Only owners have permission to perform such operations!");
      return res.redirect(`/listings/${id}`); 
    }
    next();
} 

module.exports.isReviewAuthor = async (req,res,next) =>{
  let {id , reviewId} = req.params;
  let review = await Review.findById(reviewId);    // for authorization
  if((res.locals.currUser) && (!review.author.equals(res.locals.currUser._id))){
    req.flash("error" , "Only author have permission to perform such operations!");
    return res.redirect(`/listings/${id}`); 
  }
  next();
} 