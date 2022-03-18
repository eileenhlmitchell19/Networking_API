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

// POST to create a new thought (dont forget to push the created thoughts_id to the associated user's thoughts array field)


// PUT to update a thought by its_id


// DELETE to remove a thought by its_id
  // deleteThought({ params, body}, res) {
    //     Thought.findOneAndDelete({ _id: params.id })
    //     .then(deletedThought => {
    //         if (!deletedThought) {
    //             return res.status(404).json({ message: 'No thought found with this ID!'})
    //         }
    //         res.json(deletedThought);
    //     })
    //     .catch(err => res.json(err));
    // }


module.exports = router;
//should this be router or Thought?