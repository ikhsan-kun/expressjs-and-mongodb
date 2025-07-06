//import express
const express = require('express')

//init express router
const router = express.Router();

//import PostController
const PostController = require('../controllers/PostController');

//import validate post
const { validatePost } = require('../utils/validators');

//define route for posts
router.get('/posts', PostController.findPosts);

//define route for create post
router.post('/posts', validatePost, PostController.createPost);

//define route for get post by id
router.get('/posts/:id', PostController.findPostById);

//define route for update post
router.put('/posts/:id', validatePost, PostController.updatePost);

//define route for delete post
router.delete('/posts/:id', PostController.deletePost);

//export router
module.exports = router