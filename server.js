// Build every route into server.js to start here maybe??

// we need seed data so try writing that. No explicit examples of that. Techniques in class today. Day 2 activities Item.create and insertMany { name: 'Dairy'} use this to seed?

// define and organize routes, basic CRUD, start trying to work w that. Work on creating seeds etc.
// const router = require('express').Router();
// const userRoutes = require('./userRoutes');
// const friendRoutes = require('./userRoutes');

// router.user( '/user', userRoutes );
// router.user( '/users/:userId/friends', friendRoutes );

// module.exports = router;

const express = require('express');
const db = require('./Develop/config/connection');
const routes = require('./Develop/routes');
// Require model ** or should this be ./models???
// const { friendRoutes } = require('./Develop/controllers/friendControllers');
// const { thoughtRoutes } = require('./Develop/controllers/thoughtControllers');
// const { userRoutes } = require('./Develop/controllers/userControllers');

const PORT = 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});

