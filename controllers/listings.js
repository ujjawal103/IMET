const Listing = require("../models/listing");

module.exports.index = async function(req,res){           //instead of /listings --------> "/"   coz, listings are common so that they will ensure through express router.  
    const allListings = await Listing.find({});
    res.render("./listings/index.ejs",{allListings});
}

module.exports.renderNewForm = (req,res) =>{
    res.render("./listings/new.ejs");
  }

module.exports.createListing = async function(req,res ,next) { 
    // if(!req.body.listing){
    //   throw new ExpressError(404 , "Please Send Valid Data For Listing")
    // }
      //if we want to handle errors also for each elements of listing individually then it can be by wrritting if for each and throw a new error 
      //  if(!req.body.listing.name){
      //   throw new ExpressError(404 , "Name is missing !")             //like this but it may complecated for more elements so we use joi(tool) to handle these.     joi is a npm package.
      //  }
// let result = listingSchema.validate(req.body);     //now it will validate all conditions.                      
// // console.log(result);
// if(result.error){
//   throw new ExpressError(400 , result.error);                                                        ..//to make more easy we make function for this and use as a middleware.
// }
let url = req.file.path;
let filename = req.file.filename;
const newListing = new Listing(req.body.listing);
newListing.owner = req.user._id;                  //curr user id store to owner field
newListing.image = {url , filename};
await newListing.save();
req.flash("success", "New Listing Created");
res.redirect("/listings");
}  

module.exports.showListing = async function(req,res){
    let {id} = req.params;
    const listing = await Listing.findById(id)
    .populate({
      path : "reviews",
      populate : {
        path : "author",        //to access author that is present in reviews model so need to nested populate.
      },
    })
    .populate("owner");
    if(!listing){
      req.flash("error" , "Listing you requested for does not exist!");
      res.redirect("/listings");
    }
    console.log(listing);
    res.render("./listings/show.ejs",{listing});
  }

module.exports.renderEditForm = async function(req,res){
    let {id} = req.params;
    const listing = await Listing.findById(id);
    if(!listing){
      req.flash("error" , "Listing you requested for does not exist!");
      res.redirect("/listings");
    }

    let originalImageUrl = listing.image.url;
    originalImageUrl = originalImageUrl.replace("/upload" , "/upload/h_300,w_250");   //to blury image 
    res.render("./listings/edit.ejs",{listing , originalImageUrl});
  }  

module.exports.submitEditListing = async function(req,res){
    let {id} = req.params;
    let listing = await Listing.findByIdAndUpdate(id,{...req.body.listing});

    if(typeof req.file !="undefined"){
    let url = req.file.path;
    let filename = req.file.filename;
    listing.image = {url , filename};
    await listing.save();
    }
    req.flash("success", "Listing Updated Successfully");
    res.redirect(`/listings/${id}`); 
  }  

module.exports.destroyListing = async function(req,res){
    let {id} = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);       //whenever it will call findbyidanddelete() a post middleware will call present in listing.js in models.
    // console.log(deletedListing);
    req.flash("success", "Listing Deleted Successfully");
    res.redirect("/listings");
  }
