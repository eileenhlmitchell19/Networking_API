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


//is this router or User
module.exports = router;