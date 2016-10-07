import { Router } from 'express';
import * as PostsController from './posts.controller';

const router = new Router();

// Get all Posts
router.route('/posts').get(PostsController.getPosts);

// Get one post by cuid
// router.route('/posts/:cuid').get(PostController.getPost);

// Add a new Post
router.route('/posts').post(PostsController.addPost);

// Delete a post by cuid
// router.route('/posts/:cuid').delete(PostController.deletePost);

export default router;
