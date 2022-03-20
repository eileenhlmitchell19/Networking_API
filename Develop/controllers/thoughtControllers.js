const router = require( express );
const { Thought } =  require('../thoughtRoutes.js')
//do i need to route this different


const thoughtController = {
  getThoughts(req, res) {
      Thought.find(req.body).then((dbdata) => {
          res.join(dbdata);
        });
  },
  getsingleThought(req, res) {
    Thought.find(req.body).then((dbdata) => {
        res.join(dbdata);
      });
},
  createThought(req, res) {
    Thought.create(req.body)
      .then((post) => {
        return Thought.findOneAndUpdate(
          { _id: req.body.thoughtId },
          { $addToSet: { Thoughts: thought._id } },
          { new: true }
        );
      })
      .then((thought) =>
      !thought
        ? res
            .status(404)
            .json({ message: 'Post created, but found no thought with that ID' })
        : res.json('Created the post 🎉')
    )
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
    },
  postThought(req, res) {
    Thought.findOneAndUpdate(req.body).then((dbdata) => {
        res.join(dbdata);
      });
},
  updateThought(req, res) {
    Thought.findOneAndUpdate(req.body).then((dbdata) => {
        res.join(dbdata);
      });
},
deleteThought({ params, body}, res) {
  Thought.findOneAndDelete({ _id: params.id })
  .then(deletedThought => {
      if (!deletedThought) {
          return res.status(404).json({ message: 'No thought found with this ID!'})
      }
      res.json(deletedThought);
  })
  .catch(err => res.json(err));
}
};


// // GET all thoughts
// router.get('/', async (req, res) => {
// try{
//     const thoughtData = await Thought.find();
// } catch(err) {
//     res.status(500).json()
// }
// });

// // GET a single thought
// router.get('/:thought_Id', async (req, res) => {
//     try{
//         const thoughtData = await Thought.findById(req.params.thoughtId);
//     } catch(err) {
//         res.status(500).json()
//     }  
// }),

// POST to create a new thought (dont forget to push the created thoughts_id to the associated user's thoughts array field)
 // create a new post
//  module.exports = {
//     // getPosts(req, res) {
    //   Post.find()
    //     .then((posts) => res.json(posts))
    //     .catch((err) => res.status(500).json(err));
    // },
    // getSinglePost(req, res) {
    //   Post.findOne({ _id: req.params.postId })
    //     .then((post) =>
    //       !post
    //         ? res.status(404).json({ message: 'No post with that ID' })
    //         : res.json(post)
    //     )
    //     .catch((err) => res.status(500).json(err));
    // },
    // // create a new post
    // createPost(req, res) {
    //   Thought.create(req.body)
    //     .then((post) => {
    //       return Thought.findOneAndUpdate(
    //         { _id: req.body.userId },
    //         { $addToSet: { Thoughts: thought._id } },
    //         { new: true }
    //       );
    //     })
        //IS THIS HOW YOU DO A DELETE ROUTE?? I AM SO CONFUSED ----------------HELP//
        // deletePost(req, res) {
        //     Post.delete(req.body)
        //       .then((post) => {
        //         return Thought.findOneAndDelete(
        //           { _id: req.body.userId },
        //           { $addToSet: { Thoughts: thought._id } },
        //           { new: true }
        //         );
        //       })
        // .then((user) =>
        //   !user
        //     ? res
        //         .status(404)
        //         .json({ message: 'Post created, but found no user with that ID' })
        //     : res.json('Created the post 🎉')
        // )
        // .catch((err) => {
        //   console.log(err);
        //   res.status(500).json(err);
  //       // });
  //   },
  // };


// PUT to update a thought by its_id

// pull? from set??
//Post.Delete
// DELETE to remove a thought by its_id
  // deleteThought({ params, body}, res) {
  //       Thought.findOneAndDelete({ _id: params.id })
  //       .then(deletedThought => {
  //           if (!deletedThought) {
  //               return res.status(404).json({ message: 'No thought found with this ID!'})
  //           }
  //           res.json(deletedThought);
  //       })
  //       .catch(err => res.json(err));
  //   }


module.exports = thoughtController;
//should this be router or Thought?