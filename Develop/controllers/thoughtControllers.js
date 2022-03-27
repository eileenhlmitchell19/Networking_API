// const express = require( 'express' );
// const router = require('express').Router();
const { Thought } =  require('../models');
const User = require('../models/User');
//do i need to route this different


const thoughtController = {
  getThoughts(req, res) {
    Thought.find()
    .then((dbdata) => {
        res.json(dbdata)
      })
      .catch((err) => res.status(500).json(err));
  },
  getsingleThought(req, res) {
    Thought.findOne({_id: req.params.thoughtId})
    .then((dbdata) => 
     !thought
     ? res.status(404).json({ message: 'No course with that ID' })
     : res.json(dbdata));
},
  createThought(req, res) {
    Thought.create(req.body)
      .then((thought) => {
        return User.findOneAndUpdate(
          { _id: req.body.userId },
          { $addToSet: { thoughts: thought._id } },
          { new: true }
        );
      })
      .then((thought) =>
      !thought
        ? res
            .status(404)
            .json({ message: 'Post created, but found no thought with that ID' })
        : res.json('Created the post 🎉')
    )
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
    },
  postThought(req, res) {
    Thought.findOneAndUpdate(req.body).then((dbdata) => {
        res.json(dbdata);
      });
},
  updateThought(req, res) {
    Thought.findOneAndUpdate(req.body).then((dbdata) => {
        res.json(dbdata);
      });
},
deleteThought({ params, body}, res) {
  Thought.findOneAndDelete({ _id: params.id })
  .then(deletedThought => {
      if (!deletedThought) {
          return res.status(404).json({ message: 'No thought found with this ID!'})
      }
      res.json(deletedThought);
  })
  .catch(err => res.json(err));
}
};

module.exports = thoughtController;
//should this be router or Thought?