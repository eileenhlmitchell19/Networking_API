// var express = require('express'); // Get the module
// var app = express(); // Create express by calling the prototype in var express
const { Friend } = require("../models");

const friendController = {
  getFriends(req, res) {
    Friend.find()
      .then((dbdata) => {
        res.json(dbdata);
      })
      .catch((err) => res.status(500).json(err));
  },

  getsingleFriend(req, res) {
    Friend.findOne({ _id: req.params.userid })
      .select("-__v")
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No other user with that ID" })
          : res.json(thought)
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  createFriend(req, res) {
    Friend.create(req.body)
    .then((user) => {
      console.log(user);
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

  postFriend(req, res) {
    Friend.findOneAndUpdate(req.body).then((dbdata) => {
      res.json(dbdata);
    });
  },
  updateFriend(req, res) {
    Friend.findOneAndUpdate(
        { _id: req.params.userid },
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
  deleteFriend({ params, body }, res) {
  Friend.findOneAndDelete({ _id: req.params.userid })
  .then((dbdata) =>
    !user
      ? res.status(404).json({ message: "No course with that ID" })
      : User.deleteMany({ _id: { $in: course.students } })
  )
  .then(() => res.json({ message: "Course and students deleted!" }))
  .catch((err) => res.status(500).json(err));
},
};

//should this be router or Friend
module.exports = friendController;
