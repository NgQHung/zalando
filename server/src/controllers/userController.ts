import express, { Request, Response } from 'express';
import ShoppingCart from '../models/userShoppingCart';
import AddressDelivery from '../models/userAddressDelivery';
import LikedProductModel from '../models/userLiked';
import User from '../models/user';
import { AxiosError } from 'axios';

const userController = {
  // get all users
  getAllUsers: async (req: Request, res: Response) => {
    try {
      const allUsers = await User.find();
      return res.status(200).json(allUsers);
    } catch (error) {
      const err = error as AxiosError;
      return res.status(500).json({
        data: null,
        message: 'Oops!!! Something went wrong.',
        error: err.message,
      });
    }
  },

  // delete an user
  deleteUser: async (req: Request, res: Response) => {
    const { id } = req.body;
    try {
      const user = await User.findById(id);
      return res.status(200).json('User is deleted successfully');
    } catch (error) {
      const err = error as AxiosError;
      return res.status(500).json({
        data: null,
        message: 'Oops!!! Something went wrong.',
        error: err.message,
      });
    }
  },

  addAddressDeliveryUser: async (req: Request, res: Response) => {
    const { id } = req.params;
    const data = req.body;

    try {
      const existingId = await AddressDelivery.findOne({ _id: id });
      let product;
      if (existingId) {
        product = await AddressDelivery.findOneAndUpdate(
          {
            _id: id,
          },
          { data: data }
        );
      } else {
        product = await AddressDelivery.create({
          _id: id,
          data: data,
        });
      }

      // return res.status(200).json(req.body);
      return res.status(200).json({
        data: product,
        message: `Info address delivery of user is updated successfully`,
      });
    } catch (error) {
      const err = error as AxiosError;
      return res.status(500).json({
        data: null,
        message: 'Oops!!! Something went wrong.',
        error: err.message,
      });
    }
  },

  addProductToShoppingCart: async (req: Request, res: Response) => {
    const { id } = req.params;
    const { data } = req.body;

    try {
      const existingId = await ShoppingCart.findOne({ _id: id });
      let product;
      if (existingId) {
        product = await ShoppingCart.findOneAndUpdate(
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
        product = await ShoppingCart.create({
          _id: id,
          data: [data],
        });
      }

      // return res.status(200).json({ id: id, data: data, result: all });
      return res.status(200).json({
        data: product,
        message: `Product ${data?.name} is added successfully`,
      });
    } catch (error) {
      const err = error as AxiosError;
      return res.status(500).json({
        data: null,
        message: 'Oops!!! Something went wrong.',
        error: err.message,
      });
    }
  },

  addProductToLiked: async (req: Request, res: Response) => {
    const { id } = req.params;
    const { data } = req.body;

    try {
      const existingId = await LikedProductModel.findOne({ _id: id });
      let product;
      if (existingId) {
        product = await LikedProductModel.findOneAndUpdate(
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
        product = await LikedProductModel.create({
          _id: id,
          data: [data],
        });
      }

      // return res.status(200).json({ id: id, data: data, result: all });
      return res.status(200).json({
        data: product,
        message: `Product is added to liked successfully`,
      });
    } catch (error) {
      const err = error as AxiosError;
      return res.status(500).json({
        data: null,
        message: 'Oops!!! Something went wrong.',
        error: err.message,
      });
    }
  },

  getProductsFromShoppingCartById: async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const all = await ShoppingCart.find({ _id: id });
      return res.status(200).json(all);
    } catch (error) {
      const err = error as AxiosError;
      return res.status(500).json({
        data: null,
        message: 'Oops!!! Something went wrong.',
        error: err.message,
      });
    }
  },
  getProductsFromLiked: async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const all = await LikedProductModel.find({ _id: id });
      return res.status(200).json(all);
    } catch (error) {
      const err = error as AxiosError;
      return res.status(500).json({
        data: null,
        message: 'Oops!!! Something went wrong.',
        error: err.message,
      });
    }
  },
};

export default userController;
