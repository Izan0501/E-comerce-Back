const express = require('express');
const ProductController = require('../controllers/productsXbox');
const api = express.Router();

const multiparty = require('connect-multiparty')

const md_upload = multiparty({ uploadDir: '../Server/uploads/product' });


api.post('/productsXbox', [md_upload], ProductController.createProduct);
api.get('/productsXbox', ProductController.getProduct);
api.put('/productsXbox/:id', [md_upload], ProductController.updateProduct);
api.delete('/productsXbox/:id', ProductController.deleteProduct);

module.exports = api;