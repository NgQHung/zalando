import express from 'express';
import userController from '../../controllers/userController';
import middleware from '../../middlewares/requireAuth';

const userRouter = express.Router();

// get all users
userRouter.get('/all', middleware.verifyToken, userController.getAllUsers);

// delete a user by ID
userRouter.delete('/:id', middleware.verifyTokenAndId, userController.deleteUser);

export default userRouter;
