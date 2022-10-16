import express from 'express';
import mongoose from 'mongoose';
// import { Products } from '../interfaces/products';

const Schema = mongoose.Schema;

const userLikedProductSchema = new Schema({
  accessToken: { type: String },
  data: {
    type: [
      {
        id: { type: Number },
        brand: { type: String },
        name: { type: String },
        imageUrl: { type: String },
        currentPrice: { type: Number },
        previousPrice: { type: Number },
        isFavorite: { type: Boolean },
        amount: { type: Number },
        size: { type: Number },
        totalProduct: { type: Boolean },
      },
    ],
  },
});

const LikedProductModel = mongoose.model<any>('userLikedProduct', userLikedProductSchema);

export default LikedProductModel;
