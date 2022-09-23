import { Router } from 'express'
import postController from './controllers/postController';
import userController from './controllers/userController';
import commentController from './controllers/commentController';
import tagController from './controllers/tagController';

const routes = Router();

routes.get('/user/:id', userController.getUser);
routes.post('/user', userController.createUser);
routes.put('/user/:id', userController.updateUser);
routes.delete('/user/:id', userController.deleteUser);
routes.get('/user/post', postController.selectManyPostByUser);

routes.get('/post/:id', postController.getPost);
routes.post('/post', postController.createPost);
routes.put('/post/:id', postController.updatePost);
routes.delete('/post/:id', postController.deletePost);

routes.get('/post/comment/:id', commentController.getComment);
routes.post('/post/comment', commentController.createComment);
routes.put('/post/comment/:id', commentController.updateComment);
routes.delete('/post/comment/:id', commentController.deleteComment);

routes.get('/tag/:id', tagController.getTag);
routes.post('/tag', tagController.createTag);
routes.put('/tag/:id', tagController.updateTag);
routes.delete('/tag/:id', tagController.deleteTag);

export default routes;