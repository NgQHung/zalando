import express from 'express';
import mongoose from 'mongoose';
import Joi from 'joi';
import { Products } from '../interfaces/products';
import IPurchasedProducts from '../interfaces/purchasedProducts';
// import IAddressDelivery from '../interfaces/addressDelivery';

export interface IPurchasedProductsModel extends IPurchasedProducts, mongoose.Document {
  _id: any;
  id: any;
  _doc?: any;
}

const Schema = mongoose.Schema;

const PurchasedProductsSchema = new Schema({
  listProducts: [
    {
      data: [
        {
          type: {
            id: Number,
            size: String,
          },
        },
      ],
      methodPayment: { type: String },
    },
  ],
});

const PurchasedProductModel = mongoose.model<IPurchasedProducts>('purchasedProducts', PurchasedProductsSchema);

export default PurchasedProductModel;
