module.exports = (fn)=> {                //wrapAsync
    return (req,res,next) => {           // a compact way to write try and catch.
        fn(req,res,next).catch(next);
    }
}