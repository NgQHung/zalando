import express, { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

// export interface IGetUserAuthInfoRequest extends Request {
//     user: string // or any other type
//   }

const middleware = {
  // verify token
  verifyToken: async (req: Request | any, res: Response, next: NextFunction) => {
    const { authorization } = req.headers;
    if (!authorization) {
      return res.status(401).json('Authentication required. You are not authenticated!!!');
    }

    const token = authorization.split(' ')[1];

    try {
      jwt.verify(token, process.env.ACCESS_TOKEN_SECRET as string, (err: any, user: any) => {
        if (err) {
          res.status(403).json('Token is invalid');
        }
        req.user = user;
        next();
      });
    } catch (error) {
      console.log(error);
      res.status(401).json('Request is not authorized');
    }
  },
  verifyTokenAndId: async (req: Request, res: Response, next: NextFunction) => {
    try {
      middleware.verifyToken(req, res, () => {
        if (req.user?.id == req.params.id || req.params.admin) {
          next();
        } else {
          res.status(403).json('You are not allowed to delete it');
        }
      });
    } catch (error) {
      res.status(401).json('Request is not authorized');
    }
  },
};

export default middleware;
