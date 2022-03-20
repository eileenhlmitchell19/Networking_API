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
.route('/:id')
.get(getsingleThought)
.create(createThought)
.route('/:thoughtId/posts')
.post(postThought)
.update(updateThought)
.delete(deleteThought)


// // /api/students
// router.route('/').get(getThoughts).post(createThought);

// // /api/students/:studentId
// router.route('/:thoughtId').get(getSingleThought).delete(deleteThought);

// // /api/students/:studentId/assignments
// router.route('/:userId/assignments').post(postThought);

// // /api/students/:studentId/assignments/:assignmentId
// router.route('/:studentId/assignments/:assignmentId').delete(deleteThought);

module.exports = router;
