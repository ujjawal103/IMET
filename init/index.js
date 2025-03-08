const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/imet";
main()
  .then(() => {
      console.log("Connected to DB");
  })
  .catch((err) => {
      console.error("Connection Failed: ", err.message);
  });
async function main() {
    await mongoose.connect(MONGO_URL,{
        // useNewUrlParser: true,
        // useUnifiedTopology: true,
    });

};


const initDB = async () =>{
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({      //returns a new array so that we must store new array in previous one.
      ...obj,                                          //go to every object in the array and remain all fields as it is .
      owner :  "67aa43849759753777288f4f",           //in every objects add a new field owner for a single user.
    }));
    await Listing.insertMany(initData.data);
    console.log("data was initialised");
}

initDB();