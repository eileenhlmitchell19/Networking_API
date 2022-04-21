const connection = require("../config/connection");
const { User, Thought } = require("../models");
const { getRandomUser, getRandomThoughts } = require("./data");

const fs = require("fs");
const util = require("util");
const readDir = util.promisify(fs.readdir).bind(fs);
const path = require("path");
const mongoose = require("mongoose");

//seed data for users
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

//seed data for thoughts
const thoughtData = [
  {
    "thoughtText": "Here's a cool thought...",
    "username": "lernantino",
    "userId": "1"
  },
  {
    "thoughtText": "why doesnt glue stick to the inside of the container?",
    "username": "romeo76",
    "userId": "2"
  },
  {
    "thoughtText": "Where do babies come from?",
    "username": "lernantino",
    "userId": "1"
  },
];

// function toTitleCase(str) {
//   return str.replace(/\w\S*/g, (txt) => {
//     return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
//   });
// }

// async function seedDatabase(runSaveMiddleware = false) {
//   const dir = await readDir(__dirname);
//   const seedFiles = dir.filter((f) => f.endsWith(".seed.js"));

//   for (const file of seedFiles) {
//     const fileName = file.split(".seed.js")[0];
//     const modelName = toTitleCase(fileName);
//     const model = mongoose.models[modelName];

//     if (!model) throw new Error(`Cannot find Model '${modelName}'`);
//     const fileContents = require(path.join(__dirname, file));

//     runSaveMiddleware
//       ? await model.create(fileContents)
//       : await model.insertMany(fileContents);
//   }
// }
seedDatabase();

