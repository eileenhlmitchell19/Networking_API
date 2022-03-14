const mongoose = require('mongoose');

// TODO: Define a new schema named `xxxSchema` for the subdocument
const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    price: Number,
  });
  
  
  const librarySchema = new mongoose.Schema({
    name: { type: String, required: true },
    // This will include an array that holds all the books
    books: [bookSchema],
    lastAccessed: { type: Date, default: Date.now },
  });
  
  // TODO: Create a model named `Thoughts`
  const Thoughts = mongoose.model('Thoughts', thoughtSchema);
  // TODO: Create a new instance of the model including the subdocuments
  const thoughtText = [
    { thoughtText: 'Ever think of this...' },
    { username: 'eileen@gmail.com' },
    { userId: 'History of Hogwarts' },
  ];
  
  Thought.create({ name: 'Books', books: bookData }, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
    }
  });
  
  module.exports = Library;
  