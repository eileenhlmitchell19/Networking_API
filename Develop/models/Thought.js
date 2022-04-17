
// Create a new instance of the Mongoose s
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reactionSchema = new mongoose.Schema({
  //reactionID should have: use mongoose ObjectId data type & Default value is set to a new objectID
  reactionId: {  
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId() 
  },
  reactionBody: { 
    type: String, 
    required: true, 
    maxLength: 280 
  },
  thoughts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Thought",
    },
  ],
  username: { 
    type: String, 
    required: true,   
  },
  createAt: { 
    type: Date, 
    default: Date.now, 
    get: createdAtVal => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a'), 
  },
},
  {
    toJSON:{
      virtuals:true
    },
    id:false
  });

// Create a new instance of the Mongoose schema to define shape of each document
const thoughtSchema = new mongoose.Schema({
  thoughtText: { type: String, required: true, maxLength: 280 },
  createdAt: { type: Date, default: Date.now, get: createdAtVal => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a'), },
  username: { type: String, required: true,   },
  reactions: [ reactionSchema ],
},
{
  toJSON:{
    virtuals:true
  },
  id:false
});


thoughtSchema.virtual('reactionsCount').get(function(){
  return this.thoughts.length;
})
//Using mongoose.model() to compile a model based 
const Thought = mongoose.model('Thought', thoughtSchema);


//Where does this get called??--------------------------------------------------HELP//
// Error handler function to be called when an error occurs when trying to save a document
const handleError = (err) => console.error(err);


module.exports = Thought;
