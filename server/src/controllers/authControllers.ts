import express, { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcrypt';
import User from '../models/user';
import tokenController from './tokenController';
import { GlobalArr } from '../store/resfreshTokens';

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
      return res.status(200).json(user);
    } catch (error) {
      // return res.status(500).json(error);
      return res.status(500).json({
        msg: 'Oops!!! Something went wrong.',
      });
    }
  },
  login: async (req: Request, res: Response) => {
    // const { email, password } = req.body;
    const user = await User.findOne({ email: req.body.email });
    try {
      if (!user) {
        return res.status(404).json('Incorrect email!!! Please make sure your email is correct');
        // return res.status(404).json({msg: ''})
      }
      const isPasswordMatch = user && user.password ? await bcrypt.compare(req.body.password, user.password) : false;
      if (!isPasswordMatch) {
        return res.status(404).json('Incorrect password!!! Please make sure your password is correct');
      }

      const admin = user && user.admin ? user.admin : false;
      const accessToken = tokenController.createAccessToken(user?.id, admin);
      const refreshToken = tokenController.createRefreshToken(user?.id, admin);
      GlobalArr.refreshTokens.push(refreshToken);

      // create refresh token on cookies
      res.cookie('refreshToken', refreshToken, {
        httpOnly: true,
        secure: false,
        path: '/',
        sameSite: 'strict',
      });

      const { password, ...others }: any = user?._doc;

      return res.status(200).json({ ...others, accessToken });
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  logout: async (req: Request, res: Response) => {
    try {
      res.clearCookie('refreshToken');
      GlobalArr.refreshTokens = GlobalArr.refreshTokens.filter((token) => token !== req.cookies.refreshToken);
      return res.status(200).json('You are logged out successfully');
    } catch (error) {
      return res.status(500).json({
        msg: 'Oops!!! Something went wrong.',
      });
    }
  },
};

export default authController;
