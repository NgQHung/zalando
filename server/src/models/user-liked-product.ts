import express from 'express';
import mongoose from 'mongoose';
import ILikedProducts from '../interfaces/likedProducts';

const Schema = mongoose.Schema;

const UserLikedProduct = new Schema({
  listItem: [
    {
      type: {
        id: Number,
      },
    },
  ],
});

const LikedProductModel = mongoose.model<ILikedProducts>('products', UserLikedProduct);

export default LikedProductModel;
