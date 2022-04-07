const connection = require("../config/connection");
const { User, Thought } = require("../models");
const { getRandomUser, getRandomThoughts } = require("./data");

const fs = require("fs");
const util = require("util");
const readDir = util.promisify(fs.readdir).bind(fs);
const path = require("path");
const mongoose = require("mongoose");

const userData = [
  {
    name: "Harold",
    email: "testing1@gmail.com",
    thoughts: "12345678",
    friends: "1",
  },
  {
    name: "Vincent",
    email: "testing2@gmail.com",
    thoughts: "23456789",
    friends: "2",
  },
  {
    name: "Orlando",
    email: "testing3@gmail.com",
    password: "34567891",
    friends: "3",
  },
];

function toTitleCase(str) {
  return str.replace(/\w\S*/g, (txt) => {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

async function seedDatabase(runSaveMiddleware = false) {
  const dir = await readDir(__dirname);
  const seedFiles = dir.filter((f) => f.endsWith(".seed.js"));

  for (const file of seedFiles) {
    const fileName = file.split(".seed.js")[0];
    const modelName = toTitleCase(fileName);
    const model = mongoose.models[modelName];

    if (!model) throw new Error(`Cannot find Model '${modelName}'`);
    const fileContents = require(path.join(__dirname, file));

    runSaveMiddleware
      ? await model.create(fileContents)
      : await model.insertMany(fileContents);
  }
}
seedDatabase();

// {{kdl:
//     reaction:[]}}
// connection.on('error', (err) => err);

// connection.once('open', async () => {
//   console.log('connected');

//   // Drop existing user
//   await User.deleteMany({});

//   // Create empty array to hold the students
//   const users = [];

//   // Get some random assignment objects using a helper function that we imported from ./data
//   const thoughts = getRandomThoughts(20);

//   // Loop 20 times -- add students to the students array
//   for (let i = 0; i < 20; i++) {
//     const fullName = getRandomUser();
//     const first = fullName.split(' ')[0];
//     const last = fullName.split(' ')[1];
//     const github = `${first}${Math.floor(Math.random() * (99 - 18 + 1) + 18)}`;

//     users.push([
//         username,
//         email,
//         thoughts,
//         freinds
//     ]);
//   }

//   // Add students to the collection and await the results
//   await User.collection.insertMany(users);

//   // Add courses to the collection and await the results
//   await Course.collection.insertOne({
//     thoughtName: 'Strange Thoughts',
//     wetDreams: false,
//     users: [...users],
//   });

//   // Log out the seed data to indicate what should appear in the database
//   console.table(users);
//   console.table(thoughts);
//   console.info('Seeding complete! 🌱');
//   process.exit(0);
// });
