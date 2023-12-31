import asyncHandler from '../middleware/asyncHandler.js';
import Product from '../models/productModel.js';


// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
const getProducts = asyncHandler(async (req, res) => {
    const products = await Product.find({});
    // throw new Error('some error');
    res.json(products);
})

// @desc    Fetch single product
// @route   GET /api/products/:id
// @access  Public
const getProductById = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    // const product = products.find((p)=> p._id === req.params.id);
 
    if(product){
        res.json(product);
    }else{
        res.status(404);
        throw new Error('Resource Not Found');
    }

})

export {getProducts,getProductById};