const router = require( express );
const { Thought } =  require('../thoughtRoutes.js')
//do i need to route this different

// GET all thoughts
router.get('/', async (req, res) => {
try{
    const thoughtData = await Thought.find();
} catch(err) {
    res.status(500).json()
}
});

// GET a single thought
router.get('/:thought_Id', async (req, res) => {
    try{
        const thoughtData = await User.findById(req.params.userId);
    } catch(err) {
        res.status(500).json()
    }  
})
module.exports = router;
//should this be router or Thought?