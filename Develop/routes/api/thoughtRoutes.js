const router = require('express').Router();
const {
  getThoughts,
  getsingleThought,
  createThought,
  postThought,
  updateThought,
  deleteThought,
} = require('../../controllers/thoughtControllers');

router
  .route('/')
  .get(getThoughts)

router
  .route('/:thoughtid')
  .get(getsingleThought)
  .put(updateThought)

router
  .route('/:thoughtId/reactions')
  .post(postThought)
  .delete(deleteThought)

module.exports = router;
