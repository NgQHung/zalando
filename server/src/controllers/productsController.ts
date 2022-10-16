import ProductModel from '../models/products';
import express, { Request, Response, NextFunction } from 'express';
import axios from 'axios';
import ProductDetailModel from '../models/productDetail';

export const getAllProducts = async (req: Request, res: Response, next: NextFunction) => {
  let products;
  try {
    products = await ProductModel.find({});
  } catch (error) {
    console.log(error);
  }
  return res.json(products);
};
export const getProductsDetail = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  const idToNumber = Number(id);
  let product;
  try {
    const existingProduct = await ProductDetailModel.findOne({ id: idToNumber });
    product = existingProduct;
    return res.status(200).json(product);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};
