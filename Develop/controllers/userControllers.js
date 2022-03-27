// const router = require( express );
const { User } = require('../models');
//do i need to route this different

const userController = {
  getUsers(req, res) {
    User.find(req.body).then((dbdata) => {
        res.json(dbdata);
      });
  },
  getsingleUser(req, res) {
    User.findOne(req.body).then((dbdata) => {
        res.json(dbdata);
      });
  },
  createUser(req, res) {
        User.create(req.body).then((dbdata) => {
            res.json(dbdata);
          });
    },
    postUser(req, res) {
      User.findOneAndUpdate(req.body).then((dbdata) => {
          res.json(dbdata);
        });
  },
    updateUser(req, res) {
      User.findOneAndUpdate(req.body).then((dbdata) => {
          res.json(dbdata);
        });
  },
  deleteUser({ params, body}, res) {
    User.findOneAndDelete({ _id: params.id })
    .then(deletedUser => {
        if (!deletedUser) {
            return res.status(404).json({ message: 'No user found with this ID!'})
        }
        res.json(deletedUser);
    })
    .catch(err => res.json(err));
  }
  };


//is this router or User
module.exports = userController;