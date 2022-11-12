import express from 'express';
import userController from '../../controllers/userController';
import middleware from '../../middlewares/requireAuth';

const userRouter = express.Router();

// get all users
userRouter.get('/all', middleware.verifyToken, userController.getAllUsers);

// delete a user by ID
userRouter.delete('/:id', middleware.verifyTokenAndAdmin, userController.deleteUser);

// post data of user
userRouter.post('/:id/shopping-cart', middleware.verifyToken, userController.addProductToShoppingCart);
userRouter.post('/:id/liked', middleware.verifyToken, userController.addProductToLiked);

// post data address delivery user
userRouter.post('/:id/address-delivery', middleware.verifyToken, userController.addAddressDeliveryUser);

// get data address delivery user
userRouter.get('/:id/address-delivery/info', middleware.verifyToken, userController.getAddressDeliveryById);

// get data of user
userRouter.get('/:id/shopping-cart/products', middleware.verifyToken, userController.getProductsFromShoppingCartById);
userRouter.get('/:id/liked/products', middleware.verifyToken, userController.getProductsFromLiked);

export default userRouter;
