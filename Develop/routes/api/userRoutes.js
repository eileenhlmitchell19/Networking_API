const router = require('express').Router();
const {
  getUsers,
  getsingleUser,
  createUser,
  postUser,
  updateUser,
  deleteUser,
} = require('../Develop/controllers/userControllers');

router
.route('/')
.get(getUsers)
.route('/:id')
.get(getsingleUser)
.create(createUser)
.route('/:thoughtId/posts')
.post(postUser)
.update(updateUser)
.delete(deleteUser)

module.exports = router;
