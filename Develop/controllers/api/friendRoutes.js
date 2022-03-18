const router = require( express );
const { Friend } =  require('../thoughtRoutes.js')
//do i need to route this different

// GET all friends
router.get('/', async (req, res) => {
try{
    const friendData = await Friend.find();
} catch(err) {
    res.status(500).json()
}
});

// GET a single friend
router.get('/:friend_Id', async (req, res) => {
    try{
        const friendData = await User.findById(req.params.userId);
    } catch(err) {
        res.status(500).json()
    }  
})

// POST a new friend
router.post('/', async (req, res) => {
    try{
        const friendData = await User.updateMany();
    } catch(err) {
        res.status(500).json()
    }  
})


//should this be router or Friend
module.exports = router;
