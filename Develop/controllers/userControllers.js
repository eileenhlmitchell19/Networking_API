// const router = require( express );
const { User } = require('../models');
// const User = require('../models/User');
//do i need to route this different

const userController = {
  getUsers(req, res) {
    User.find()
    .then((dbdata) => {
        res.json(dbdata);
      })
      .catch((err) => res.status(500).json(err));
  },
  getsingleUser(req, res) {
  User.findOne({ _id: req.params.userid })
  .select("-__v")
  .then((user) =>
    !user
      ? res.status(404).json({ message: "No user with that ID" })
      : res.json(user)
  )
  .catch((err) => {
    console.log(err);
    res.status(500).json(err);
  });
},
  createUser(req, res) {
    //     User.create(req.body).then((dbdata) => {
    //         res.json(dbdata);
    //       });
    // },
    User.create(req.body)
    .then((user) => {
      console.log(user);
      return User.findOneAndUpdate(
        { _id: req.body.userId },
        { $addToSet: { thoughts: thought._id } },
        { new: true }
      );
    })
    .then((user) =>
    !user
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
    postUser(req, res) {
      User.findOneAndUpdate(req.body).then((dbdata) => {
          res.json(dbdata);
        });
  },
    updateUser(req, res) {
      User.findOneAndUpdate(
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
  deleteUser( req, res) {
    User.findOneAndDelete({ _id: req.params.userid })
      .then((dbdata) =>
        !user
          ? res.status(404).json({ message: "No course with that ID" })
          : User.deleteMany({ _id: { $in: course.students } })
      )
      .then(() => res.json({ message: "Course and students deleted!" }))
      .catch((err) => res.status(500).json(err));
  },
  };


//is this router or User
module.exports = userController;