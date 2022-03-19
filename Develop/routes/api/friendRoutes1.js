const router = require('express').Router();
const {
  getFriend,
  getSingleFriend,
  createFriend,
  deleteFriend,
} = require('../controllers/friendControllers');

// /api/students
router.route('/').get(getFriend).post(createFriend);

// /api/students/:studentId
router.route('/:friendId').get(getSingleFriend).delete(deleteFriend);

// /api/students/:studentId/assignments
// router.route('/:userId/assignments').post(addAssignment);

// /api/students/:studentId/assignments/:assignmentId
// router.route('/:studentId/assignments/:assignmentId').delete(removeAssignment);

module.exports = router;
