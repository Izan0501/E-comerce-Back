const express = require('express');
const ProductController = require('../controllers/productsPs4');
const api = express.Router();

const multiparty = require('connect-multiparty')

const md_upload = multiparty({ uploadDir: '../Server/uploads/product' });


api.post('/productsPs4', [md_upload], ProductController.createProduct);
api.get('/productsPs4', ProductController.getProduct);
api.put('/productsPs4/:id', [md_upload], ProductController.updateProduct);
api.delete('/productsPs4/:id', ProductController.deleteProduct);

module.exports = api;