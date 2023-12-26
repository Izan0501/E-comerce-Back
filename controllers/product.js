const Product = require('../models/product');
const image = require('../utils/getFileName');

async function createProduct(req, res) {
    
    const newProduct = new Product(req.body);

    if (req.files.image) {
        const imagePath = image.getFileName(req.files.image);
        newProduct.image = imagePath;
    }

    try {
        await newProduct.save();
        res.status(200).send({ msg: `Saved Product` })
    } catch (error) {
        res.status(500).send({ msg: `error saving product ${error}` })
    }
    
};

async function getProduct(req, res) {
    try {
        const products = await Product.find();
        res.status(200).send(products);
    } catch (error) {
        res.status(200).saved({ msg: `Undefined Product` })
    }
};

async function updateProduct(req, res) {
    const { id } = req.params;
    const productData = req.body;
   

    if (req.files.image) {
        const imagePath = image.getFileName(req.files.image);
        productData.image = imagePath;
    }

    try {
        await Product.findByIdAndUpdate({ _id: id }, productData);
        res.status(200).send({ msg: 'Updated Product' });
    } catch (error) {
        res.status(400).send({ msg: 'Update Error' });
    }
};

async function deleteProduct(req, res) {
    const { id } = req.params;
    
    try {
        await Product.findByIdAndDelete(id) 
        res.status(200).send({ msg: 'Remove Product' })
    } catch (error) {
        res.status(400).send({ msg:'error deleting product' })
    }
}

module.exports = {
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct,
};