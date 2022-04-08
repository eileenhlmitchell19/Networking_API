// Create a new instance of the Mongoose s
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create a new instance of the Mongoose schema to define shape of each document
const userSchema = new mongoose.Schema({
  username: { 
    type: String, 
    required: true, 
    trim: true, 
    unique: true 
  },
  // This will add a single subdocument to include the manager's information
  email: { type: String, required: true, unique: true },
  // This will include an array that holds all the employees' information

  thoughts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Thought",
    },
  ],

  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
},
  {
    toJSON:{
      virtuals:true
    },
    id:false
  }

);

userSchema.virtual('friendCount').get(function(){
  return this.friends.length;
})

//Using mongoose.model() to compile a model based
const User = mongoose.model("User", userSchema);

//Where does this get called??--------------------------------------------------HELP//
// Error handler function to be called when an error occurs when trying to save a document
const handleError = (err) => console.error(err);

module.exports = User;
