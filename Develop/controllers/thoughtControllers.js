// const express = require( 'express' );
// const router = require('express').Router();
const { Thought } = require("../models");
// const User = require('../models/User');
//do i need to route this different

const thoughtController = {
  //GETS all thoughts-------------//
  getThoughts(req, res) {
    Thought.find()
      .then((dbdata) => {
        res.json(dbdata);
      })
      .catch((err) => res.status(500).json(err));
  },

  //GETS a single thought--------------//
  getsingleThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtid })
      .select("-__v")
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: "No course with that ID" })
          : res.json(thought)
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  //CREATES a thought-------------//
  createThought(req, res) {
    Thought.create(req.body)
      .then((thought) => {
        console.log(thought);
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
              .json({
                message: "Post created, but found no thought with that ID",
              })
          : res.json("Created the post 🎉")
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  //POSTS a thought--------------//
  postThought(req, res) {
    Thought.findOneAndUpdate(req.body).then((dbdata) => {
      res.json(dbdata);
    });
  },
  //UPDATES a thought-------------//
  updateThought(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtid },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((dbdata) =>
        !course
          ? res.status(404).json({ message: "No course with this id!" })
          : res.json(dbdata)
      )
      .catch((err) => res.status(500).json(err));
  },
  //DELETES a thought-------------//
  deleteThought(req, res) {
    Thought.findOneAndDelete({ _id: req.params.thoughtid })
      .then((dbdata) =>
        !thought
          ? res.status(404).json({ message: "No course with that ID" })
          : Thought.deleteMany({ _id: { $in: thought.reactions } })
      )
      .then(() => res.json({ message: "Course and students deleted!" }))
      .catch((err) => res.status(500).json(err));
  },
};

module.exports = thoughtController;
//should this be router or Thought?
