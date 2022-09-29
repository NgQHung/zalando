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
  res.json(products);
};
export const getProductsDetail = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  const idToNumber = Number(id);
  //   ef133ce62dmshd721312341522d5p1fab5ajsn971767a772cf
  // const options = {
  //   method: 'GET',
  //   url: 'https://asos2.p.rapidapi.com/products/v3/detail',
  //   params: { id: id, lang: 'en-US', store: 'US', sizeSchema: 'US', currency: 'USD' },
  //   headers: {
  //     'X-RapidAPI-Key': '26b16918a6msh97f98caebeb3f62p12bd56jsn089aaa0d1df5',
  //     'X-RapidAPI-Host': 'asos2.p.rapidapi.com',
  //   },
  // };
  let product;
  try {
    const existingProduct = await ProductDetailModel.findOne({ id: idToNumber });
    // if (existingProduct) {
    product = existingProduct;
    // }
    // else {
    //   const response = await axios.request(options);
    //   product = response.data;
    //   await ProductDetailModel.create(product);
    // }
  } catch (error) {
    console.log(error);
  }
  res.json(product);
};
