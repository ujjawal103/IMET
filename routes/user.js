const express = require("express");
const router = express.Router();  //now it will also accept coming values in params in parent route(common route) like id
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/expressError.js");
const User = require("../models/user.js");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const passportLocalMongoose = require('passport-local-mongoose');
const { saveRedirectUrl } = require("../middleware.js");

const userController = require("../controllers/users.js");

router.route("/signup")
.get(userController.renderSignupPage)
.post(wrapAsync(userController.signupAdded)
);




router
    .route("/login")
        .get(userController.renderLoginPage)
        .post(
            saveRedirectUrl,                                      //middleware that return just requested url for redirecting but due to authentication we sudden moved on /login.
            passport.authenticate(
                'local' ,
                {
                    failureRedirect : '/users/login' , 
                    failureFlash : true
                }
            ) ,                                              //passport.authenticate is a middleware that is use to check that the logining user is already registerd or not.  if not registered then it will redirect to "/users/login" , and there are many reasons possible to failure authentication like user exists but username is incorrect or password is incorrect so we use {failureFlash : true} means we may send a flash msg on failure.
            userController.loginAdded
        );



router.get("/logout" , userController.logout);

module.exports = router;