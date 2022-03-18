
// Create a new instance of the Mongoose s
const mongoose = require('mongoose');

// Create a new instance of the Mongoose schema to define shape of each document
const reactionSchema = new mongoose.Schema({
  // 

});

import mongoose from 'mongoose';
const { Schema } = mongoose;

const blogSchema = new Schema({
  title:  String, // String is shorthand for {type: String}
  author: String,
  body:   String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs:  Number
  }
});

// Create a new instance of the Mongoose schema to define shape of each document
const thoughtSchema = new mongoose.Schema({
  // 
  reactions: [ reactionSchema ]
});

//Using mongoose.model() to compile a model based 
const Thought = mongoose.model('Thought', thoughtSchema);

// Error handler function to be called when an error occurs when trying to save a document
const handleError = (err) => console.error(err);


module.exports = Thought;


//-------------------------------------------------------------------------------//


// Create a new instance of the Mongoose s
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create a new instance of the Mongoose schema to define shape of each document
const thoughtSchema = new mongoose.Schema({
  thoughtText: { type: String, required: true, maxLength: 20 },
  createdAt: { type: Date, default: Date.now, get: Date.now,  },
  //I DONT UNDERSTAND GETTER METHODS----------------------------------------HELP//
  username: { type: String, required: true,   },
  reactions: [ reactionSchema ],
});



//Using mongoose.model() to compile a model based 
const User = mongoose.model('User', userSchema);

// Error handler function to be called when an error occurs when trying to save a document
const handleError = (err) => console.error(err);


module.exports = User;
