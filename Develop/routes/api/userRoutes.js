const router = require('express').Router();
const {
  getUsers,
  getsingleUser,
  createUser,
  // postUser,
  updateUser,
  deleteUser,
} = require('../../controllers/userControllers');

// const {
//   getFriends,
//   getsingleFriend,
//   createFriend,
//   postFriend,
//   updateFriend,
//   deleteFriend,
// } = require('../../controllers/friendControllers');

router
  .route('/')
  // .get(getFriends)
  .get(getUsers)
  .post(createUser)

router
  .route('/:id')
  // .get(getsingleFriend)
  .get(getsingleUser)
  // .put(updateFriend)
  .put(updateUser)

router
  .route('/:userId/friends/:friendId')
  // .post(postFriend)
  // .post(postUser)
  // .delete(deleteFriend)
  .delete(deleteUser)



module.exports = router;

