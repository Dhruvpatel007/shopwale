// const express = require(express);
import express from 'express';
// import cors from 'cors'
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import cookieParser from 'cookie-parser';
import productRoutes from './routes/productRoutes.js';
import userRoutes from '../backend/routes/userRoutes.js'
import orderRoutes from '../backend/routes/orderRoutes.js'
import {notFound, errorHandler} from '../backend/middleware/errorMiddleware.js';

dotenv.config();


connectDB();
const port = process.env.PORT || 5000;
 
const app=express();
app.use(express.json())
app.use(express.urlencoded({extended: true}))
// app.use(cors());

// cookie parser middleware
app.use(cookieParser())

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header("Access-Control-Allow-Headers", "x-access-token, Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get('/', (req, res)=>{
   console.log('API is running....');
})

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);
app.use(notFound);
app.use(errorHandler);


app.listen(port, ()=>{
    console.log(`Server running on ${port}`)
});