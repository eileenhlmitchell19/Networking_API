const router = require('express').Router();
const {
  getUsers,
  getsingleUser,
  createUser,
  postUser,
  updateUser,
  deleteUser,
} = require('../../controllers/userControllers');

const {
  getFriends,
  getsingleFriend,
  createFriend,
  postFriend,
  updateFriend,
  deleteFriend,
} = require('../../controllers/friendControllers.js');

router
  .route('/')
  .get(getFriends)

router
  .route('/:userId')
  .get(getsingleFriend)
  .create(createFriend)

router
  .route('/:userId/friends/:friendId')
  .post(postFriend)
  .delete(deleteFriend)



module.exports = router;

