const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
    email : {
        type : String,
        required : true
    },
});

userSchema.plugin(passportLocalMongoose);  //this plugin is used becouse this will create username , salting and hashed password feields automatically as a key in the schema.

module.exports = mongoose.model('User',userSchema);