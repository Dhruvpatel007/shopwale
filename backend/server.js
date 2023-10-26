// const express = require(express);
import express from 'express';
import cors from 'cors'
import dotenv from 'dotenv';
import connectDB from './config/db.js';
dotenv.config();
import products from './data/products.js';

connectDB();
const port = process.env.PORT || 5000;
 
const app=express();
// const cors = require('cors');
app.use(cors());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header("Access-Control-Allow-Headers", "x-access-token, Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get('/', (req, res)=>{
   console.log('API is running....');
})

app.get('/api/products', (req, res) =>{
    res.json(products);
})

app.get('/api/products/:id', (req, res) =>{

    const product = products.find((p)=> p._id === req.params.id)
    res.json(product);
})


app.listen(port, ()=>{
    console.log(`Server running on ${port}`)
});