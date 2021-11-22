const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/inotebook?readPreference=primary&appname=MongoDB%20Compass&ssl=false"
const connectToMongo = ()=>{
    // call-back function(second argument)
mongoose.connect(mongoURI, ()=>{
console.log("Connected to Mongo Successfully");
})
}
// exporting the function to use 
module.exports = connectToMongo;
