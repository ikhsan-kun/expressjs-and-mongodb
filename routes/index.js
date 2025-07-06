//import express
const express = require('express')

//init express router
const router = express.Router();

//import PostController
const PostController = require('../controllers/PostController');

//define route for posts
router.get('/posts', PostController.findPost);

//export router
module.exports = router