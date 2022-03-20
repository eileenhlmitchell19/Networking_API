const router = require('express').Router();
const {
  getUser,
  getSingleUser,
  createUser,
  deleteUser,
} = require('../controllers/userControllers');



// // /api/courses/:courseId
// router
  
//   .get(getSingleCourse)
//   .put(updateCourse)
//   .delete(deleteCourse);


// /api/students
router.route('/').get(getUser).post(createUser);

// /api/students/:studentId
router.route('/:userId').get(getSingleUser).delete(deleteUser);

// /api/students/:studentId/assignments
// router.route('/:userId/assignments').post(addAssignment);

// /api/students/:studentId/assignments/:assignmentId
// router.route('/:studentId/assignments/:assignmentId').delete(removeAssignment);

module.exports = router;
