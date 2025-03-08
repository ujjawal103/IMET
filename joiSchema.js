const Joi = require('joi'); 
const review = require('./models/review');
 

//not a mongoose schema it is just for validation purpose
module.exports.listingSchema = Joi.object({
    listing: Joi.object({

        name : Joi.string().required(),
        profession : Joi.string().required(),
        price : Joi.number().required().min(0),
        location : Joi.string().required(),
        country : Joi.string().required(),
        image : Joi.string().allow("" , null) 
        }).required()
    });




module.exports.reviewSchema = Joi.object({
    review : Joi.object({
        rating : Joi.number().required().min(1).max(5),
        comment : Joi.string().required(),
    }).required(),
});    