import express, { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcrypt';
import User from '../models/user';
import jwt from 'jsonwebtoken';

const createAccessToken = (id: string, admin: boolean) => {
  return jwt.sign({ id, admin }, process.env.ACCESS_TOKEN_SECRET as string, { expiresIn: '3d' });
};

const authController = {
  register: async (req: Request, res: Response) => {
    const { password, firstName, email } = req.body;
    try {
      // hash the password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      // create new user
      const newUser = new User({
        firstName: firstName,
        email: email,
        password: hashedPassword,
      });

      // create an user on Mongoose
      const user = await newUser.save();
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  login: async (req: Request, res: Response) => {
    // const { email, password } = req.body;
    const user = await User.findOne({ email: req.body.email });
    try {
      if (!user) {
        res.status(404).json('Incorrect email');
      }
      const isPasswordMatch = user && user.password ? await bcrypt.compare(req.body.password, user.password) : false;
      if (!isPasswordMatch) {
        res.status(404).json('Incorrect password');
      }

      // create an access token
      // const token = createAccessToken({
      //   id: user.id,
      // admin: user.admin})
      const admin = user && user.admin ? user.admin : false;
      const token = createAccessToken(user?.id, admin);

      const { password, ...others }: any = user?._doc;

      return res.status(200).json({ ...others, token });
    } catch (error) {}
  },
};

export default authController;
