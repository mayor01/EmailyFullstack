//creating moongoose model class
//mongoose wants to know all of the different properties that our records will have inside of our database
const mongoose = require("mongoose");
//and it requires us to define all those ahead of time with the schema object
const { Schema } = mongoose;
//tells the schema that the google id must be in string
const userSchema = new Schema({
  username: String,
  googleId: String
});
//telling mongoose we want to creaate a new collection called users
//this create the actual model class and tells mongoose that this collections needs to be created.
mongoose.model("users", userSchema);
