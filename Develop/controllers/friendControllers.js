// var express = require('express'); // Get the module
// var app = express(); // Create express by calling the prototype in var express
const { Friend } = require('../models')

const friendController = {
  getFriends(req, res) {
    Friend.find(req.body).then((dbdata) => {
        res.json(dbdata);
      });
  },
  getsingleFriend(req, res) {
    Friend.findOne(req.body).then((dbdata) => {
        res.json(dbdata);
      });
  },
  createFriend(req, res) {
        Friend.create(req.body).then((dbdata) => {
            res.json(dbdata);
          });
    },
    postFriend(req, res) {
      Friend.findOneAndUpdate(req.body).then((dbdata) => {
          res.json(dbdata);
        });
  },
    updateFriend(req, res) {
      Friend.findOneAndUpdate(req.body).then((dbdata) => {
          res.json(dbdata);
        });
  },
  deleteFriend({ params, body}, res) {
    Friend.findOneAndDelete({ _id: params.id })
    .then(deletedFriend => {
        if (!deletedFriend) {
            return res.status(404).json({ message: 'No friend found with this ID!'})
        }
        res.json(deletedFriend);
    })
    .catch(err => res.json(err));
  }
  };



// // GET all friends
// router.get('/', async (req, res) => {
//     try{
//         const friendData = await Friend.find();
//     } catch(err) {
//         res.status(500).json()
//     }
//     });

// // GET a single friend
// app.get('/:friend_Id', async (req, res) => {
//     try{
//         const friendData = await User.findById(req.params.userId);
//     } catch(err) {
//         res.status(500).json()
//     }  
// })



// // POST a new friend
// app.post('/', async (req, res) => {
//     try{
//         const friendData = await User.updateMany();
//     } catch(err) {
//         res.status(500).json()
//     }  
// })


//should this be router or Friend
module.exports = friendController;
