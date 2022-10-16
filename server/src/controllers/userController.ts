import express, { Request, Response } from 'express';
import ShoppingCart from '../models/userShoppingCart';
import LikedProductModel from '../models/userLiked';
import User from '../models/user';

const userController = {
  // get all users
  getAllUsers: async (req: Request, res: Response) => {
    try {
      const allUsers = await User.find();
      return res.status(200).json(allUsers);
    } catch (error) {
      return res.status(500).json(error);
    }
  },

  // delete an user
  deleteUser: async (req: Request, res: Response) => {
    const { id } = req.body;
    try {
      const user = await User.findById(id);
      return res.status(200).json('User is deleted successfully');
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  addProductToShoppingCart: async (req: Request, res: Response) => {
    const { id } = req.params;
    const { data } = req.body;

    try {
      const existingId = await ShoppingCart.findOne({ _id: id });

      if (existingId) {
        await ShoppingCart.findOneAndUpdate(
          {
            _id: id,
          },
          // for push object data to an array
          // {
          //   $push: { data: data },
          // }
          { data: data }
        );
      } else {
        await ShoppingCart.create({
          _id: id,
          data: [data],
        });
      }

      // return res.status(200).json({ id: id, data: data, result: all });
      return res.status(200).json({
        msg: `Product ${data?.name} is added successfully`,
      });
    } catch (error) {
      return res.status(500).json(error);
    }
  },

  addProductToLiked: async (req: Request, res: Response) => {
    const { id } = req.params;
    const { data } = req.body;

    try {
      const existingId = await LikedProductModel.findOne({ _id: id });

      if (existingId) {
        await LikedProductModel.findOneAndUpdate(
          {
            _id: id,
          },
          // for push object data to an array
          // {
          //   $push: { data: data },
          // }
          { data: data }
        );
      } else {
        await LikedProductModel.create({
          _id: id,
          data: [data],
        });
      }

      // return res.status(200).json({ id: id, data: data, result: all });
      return res.status(200).json({
        msg: `Product is added successfully`,
      });
    } catch (error) {
      return res.status(500).json(error);
    }
  },

  getProductsFromShoppingCartById: async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const all = await ShoppingCart.find({ _id: id });
      return res.status(200).json(all);
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  getProductsFromLiked: async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const all = await LikedProductModel.find({ _id: id });
      return res.status(200).json(all);
    } catch (error) {
      return res.status(500).json(error);
    }
  },
};

export default userController;
