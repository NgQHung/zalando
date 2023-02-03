import express from 'express';
import mongoose from 'mongoose';
import IShoppingCart from '../interfaces/shoppingCart';
// import { Products } from '../interfaces/products';

export interface IShoppingCartModel extends IShoppingCart, mongoose.Document {
  _id: any;
  id: any;
  _doc?: any;
}

const Schema = mongoose.Schema;

const userShoppingCart = new Schema({
  // id: { type: String },
  listProducts: [
    {
      type: {
        id: Number,
      },
    },
  ],
});

const ProductShoppingCartModel = mongoose.model<IShoppingCartModel>('userShoppingCart', userShoppingCart);

export default ProductShoppingCartModel;
