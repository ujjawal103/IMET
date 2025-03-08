const User = require("../models/user");

module.exports.renderSignupPage = (req,res)=>{
    res.render("./users/signup.ejs");
}

module.exports.signupAdded = async (req,res) =>{
    try{
        let {username , email , password} = req.body;
        const newUser = new User({ username , email });
        const registeredUser = await User.register(newUser , password);
        // console.log(registeredUser);
        req.login(registeredUser , (err) =>{     //login is a passport method that used to login a user mostly use when a user signup then need automatically login also and it takes signup user as argument and a callback function.   it return(assign) the user info in req.user
            if(err){
                return next(err);
            }
            req.flash("success" , "Welcome to IMet");
            res.redirect("/listings");
        });
        
    }catch(err){
        req.flash("error" , err.message);
        res.redirect("/users/signup");      //error handling through try catch for custom handling.
    }
   
}

module.exports.renderLoginPage = (req,res)=>{
    res.render("./users/login.ejs");
}

module.exports.loginAdded = async (req,res)=>{  
    // console.log("User authenticated:", req.user);

    req.flash("success" , "Welcome back to IMet");
    let redirectUrl = res.locals.redirectUrl || "/listings" ;    // it may our locals become empty for some reason like directly login from home("/listings") page. then it will redirect to home page.
    res.redirect(redirectUrl);  //after login go to the url from where it is requested for.   (session defined in middleware)
}

module.exports.logout = (req,res,next)=>{
    req.logOut((err) =>{           //a logout method in passport so no need to built this from scratch. it takes a callback function .
        if(err){
            next(err);
        }
        req.flash("success" , "you are logged out!");
        res.redirect("/listings");
    });
}