import express from 'express';
import { getAllProducts, getProductsDetail } from '../controllers/productsController';

const router = express.Router();

router.get('/products', getAllProducts);
router.get('/product/:id', getProductsDetail);
export default router;
