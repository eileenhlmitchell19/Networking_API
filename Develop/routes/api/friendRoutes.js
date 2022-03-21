const router = require('express').Router();
const {
  getFriends,
  getSingleFriend,
  createFriend,
  postFriend,
  updateFriend,
  deleteFriend,
} = require('./Develop/controllers/friendControllers');

router
.route('/')
.get(getFriends)
.route('/:id')
.get(getSingleFriend)
.create(createFriend)
.route('/:thoughtId/posts')
.post(postFriend)
.update(updateFriend)
.delete(deleteFriend)

module.exports = router;
