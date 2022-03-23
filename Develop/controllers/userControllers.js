// const router = require( express );
const { User } = require('../models');
//do i need to route this different

const userController = {
  getUsers(req, res) {
    User.find(req.body).then((dbdata) => {
        res.join(dbdata);
      });
  },
  getsingleUser(req, res) {
    User.findOne(req.body).then((dbdata) => {
        res.join(dbdata);
      });
  },
  createUser(req, res) {
        User.create(req.body).then((dbdata) => {
            res.join(dbdata);
          });
    },
    postUser(req, res) {
      User.findOneAndUpdate(req.body).then((dbdata) => {
          res.join(dbdata);
        });
  },
    updateUser(req, res) {
      User.findOneAndUpdate(req.body).then((dbdata) => {
          res.join(dbdata);
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

//

// GET all users
// router.get('/', async (req, res) => {
// try{
//     const userData = await User.find();
// } catch(err) {
//     res.status(500).json()
// }
// });

// // GET a single user
// router.get('/:user_Id', async (req, res) => {
//     try{
//         const userData = await User.findById(req.params.userId);
//     } catch(err) {
//         res.status(500).json()
//     }  
// })


//is this router or User
module.exports = userController;