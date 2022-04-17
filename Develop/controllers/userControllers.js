const { User, Thought } = require("../models");
//do i need to route this different

const userController = {
  //GETS all users-------------//
  getUsers(req, res) {
    User.find()
      .then((dbdata) => {
        res.json(dbdata);
      })
      .catch((err) => res.status(500).json(err));
  },
  //GETS a single user-------------//
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

    //CREATES a user-------------//
    createUser(req, res) {
    User.create(req.body)
    .then((dbdata) => res.json(dbdata))
    .catch((err) => res.json(err))

  },

  //UPDATES a user-------------//
  updateUser(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userid },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((dbdata) =>
        !dbdata
          ? res.status(404).json({ message: "No user with this id!" })
          : res.json(dbdata)
      )
      .catch((err) => res.status(500).json(err));
  },


  //DELETES a user-------------//
  deleteUser(req, res) {
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
