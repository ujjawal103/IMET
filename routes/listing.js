if(process.env.NODE_ENV != "production"){
  require('dotenv').config();
}

// console.log(process.env.SECRET);


const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/expressError.js");
const { listingSchema , reviewSchema } = require("../joiSchema.js");
const Listing = require("../models/listing.js");
const {validateListing ,isLoggedIn , isOwner} = require("../middleware.js");

const listingController = require("../controllers/listings.js");

const multer  = require('multer')
const {storage} = require("../cloudConfig.js");
const upload = multer({ storage });


router.route("/")
.get(wrapAsync(listingController.index))
.post(
   isLoggedIn,
   upload.single('listing[image]'),
   validateListing,
   wrapAsync(listingController.createListing)
);



//create route for listings
router.get("/new",isLoggedIn,listingController.renderNewForm);
//create post----> //now available in router.route as they are at common path but different req.


router.route("/:id")
  .get(wrapAsync(listingController.showListing))
  .put(
    isLoggedIn,       //for authentication  
    isOwner,          //for authorization
    upload.single('listing[image]'),
    validateListing , 
    wrapAsync(listingController.submitEditListing))
   .delete(
    isLoggedIn,
    isOwner,
    wrapAsync(listingController.destroyListing)
    );  
  


//index route
     //now available in router.route as they are at common path but different req.
   



//show of listings
  // in router.route()
  





//edit listing
  router.get(
    "/:id/edit",
    isLoggedIn,
    isOwner,
    wrapAsync(listingController.renderEditForm));
  
    
  
//delete route
  // in router.route();
  

  module.exports = router;