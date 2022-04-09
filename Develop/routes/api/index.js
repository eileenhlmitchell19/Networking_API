// const friendRoutes = require('../../controllers/api/friendRoutes');
// const thoughtRoutes = require('../../controllers/api/thoughtRoutes');
// const userRoutes = require('../../controllers/api/userRoutes');

// module.exports = { 
//     friendRoutes, 
//     thoughtRoutes, 
//     userRoutes 
// };

const router = require('express').Router();
// const friendRoutes = require('./friendRoutes');
const thoughtRoutes = require('./thoughtRoutes');
const userRoutes = require('./userRoutes');

// router.use('/friends', friendRoutes);
router.use('/thoughts', thoughtRoutes);
router.use('/users', userRoutes);

module.exports = router;
