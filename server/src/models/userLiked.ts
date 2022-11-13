import express from 'express';
import mongoose from 'mongoose';
import { IUserLikedProducts } from '../interfaces/user-liked-products';
// import { Products } from '../interfaces/products';

export interface ILikedProductsModel extends IUserLikedProducts, mongoose.Document {
  _id: any;
  id: any;
  _doc?: any;
}

const Schema = mongoose.Schema;

const userLikedProductSchema = new Schema({
  _id: { type: Schema.Types.ObjectId },
  listProducts: {
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
        size: { type: String },
      },
    ],
  },
});

const LikedProductModel = mongoose.model<ILikedProductsModel>('userLikedProduct', userLikedProductSchema);

export default LikedProductModel;
