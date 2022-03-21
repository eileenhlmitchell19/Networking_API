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

// // /api/courses/:courseId
// router
  
//   .get(getSingleCourse)
//   .put(updateCourse)
//   .delete(deleteCourse);


// /api/students
// router.route('/').get(getUser).post(createUser);

// // /api/students/:studentId
// router.route('/:userId').get(getSingleUser).delete(deleteUser);

// /api/students/:studentId/assignments
// router.route('/:userId/assignments').post(addAssignment);

// /api/students/:studentId/assignments/:assignmentId
// router.route('/:studentId/assignments/:assignmentId').delete(removeAssignment);

module.exports = router;
