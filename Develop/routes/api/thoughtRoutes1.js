const router = require('express').Router();
const {
  getThought,
  getSingleThought,
  createThought,
  deleteThought,
} = require('../controllers/thoughtControllers');

// /api/students
router.route('/').get(getThought).post(createThought);

// /api/students/:studentId
router.route('/:thoughtId').get(getSingleThought).delete(deleteThought);

// /api/students/:studentId/assignments
// router.route('/:userId/assignments').post(addAssignment);

// /api/students/:studentId/assignments/:assignmentId
// router.route('/:studentId/assignments/:assignmentId').delete(removeAssignment);

module.exports = router;
