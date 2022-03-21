const router = require('express').Router();
const {
  getThoughts,
  getsingleThought,
  createThought,
  postThought,
  updateThought,
  deleteThought,
} = require('../Develop/controllers/thoughtControllers');

router
.route('/')
.get(getThoughts)
.route('/:id')
.get(getsingleThought)
.create(createThought)
.route('/:thoughtId/posts')
.post(postThought)
.update(updateThought)
.delete(deleteThought)

module.exports = router;
