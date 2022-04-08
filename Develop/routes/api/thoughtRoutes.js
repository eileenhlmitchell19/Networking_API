// const express = require("express")
const router = require('express').Router();
const {
  getThoughts,
  getsingleThought,
  createThought,
  postThought,
  updateThought,
  deleteThought,
} = require('../../controllers/thoughtControllers');

router
  .route('/')
  .get(getThoughts)
  .post(createThought)//tutor addedhtis nor my fault

router
  .route('/:thoughtid')
  .get(getsingleThought)
  .put(updateThought)

router
  .route('/:thoughtid/reactions')
  .post(postThought)
  .delete(deleteThought)

module.exports = router;
