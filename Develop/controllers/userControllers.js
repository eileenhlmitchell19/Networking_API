const router = require( express );
const { User } =  require('../userRoutes.js')
//do i need to route this different

// GET all users
router.get('/', async (req, res) => {
try{
    const userData = await User.find();
} catch(err) {
    res.status(500).json()
}
});

// GET a single user
router.get('/:user_Id', async (req, res) => {
    try{
        const userData = await User.findById(req.params.userId);
    } catch(err) {
        res.status(500).json()
    }  
})

//POST a new user


// PUT to update a user by its _id 


// DELETE to remove user by its _id
// deleteUser({ params }, res) {
//     User.findOneAndDelete({ _id: params.id })
//     .then(dbUserData => {
//     if (!dbUserData) {
//         res.status(404).json({ message: 'No user can be found with this ID!' });
//         return;
//     }
//     res.json(dbUserData);
//     })
//     .catch(err => res.status(400).json(err))
// }

//is this router or User
module.exports = router;