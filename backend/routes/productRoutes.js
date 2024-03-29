import express from 'express';
// import products from '../data/products.js';
// import Product from '../models/productModel.js'
// import asyncHandler from '../middleware/asyncHandler.js';
const router = express.Router();
import {getProducts, getProductById, createProduct, updateProduct, deleteProduct, createProductReview, getTopProducts} from '../controllers/productController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

router.route('/top').get(getTopProducts)
router.route('/').get(getProducts).post(protect, admin, createProduct);
router.route('/:id').get(getProductById).put(protect, admin, updateProduct).delete(protect, admin, deleteProduct);
router.route('/:id/reviews').post(protect, createProductReview);  

export default router;
