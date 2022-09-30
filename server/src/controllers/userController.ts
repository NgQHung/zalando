import express, { Request, Response } from 'express';
import User from '../models/user';

const userController = {
  // get all users
  getAllUsers: async (req: Request, res: Response) => {
    try {
      const allUsers = await User.find();
      res.status(200).json(allUsers);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  // delete an user
  deleteUser: async (req: Request, res: Response) => {
    const { id } = req.body;
    try {
      const user = await User.findById(id);
      res.status(200).json('User is deleted successfully');
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

export default userController;
