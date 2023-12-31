const express = require('express');
const ProductController = require('../controllers/product');
const api = express.Router();

const multiparty = require('connect-multiparty')

const md_upload = multiparty({ uploadDir: '../Server/uploads/product' });


api.post('/product', [md_upload], ProductController.createProduct);
api.get('/products', ProductController.getProduct);
api.put('/product/:id', [md_upload], ProductController.updateProduct);
api.delete('/product/:id', ProductController.deleteProduct);

module.exports = api;