const express = require('express');

const productsController = require('../controllers/products')

const router = express.Router();

// READ - GET all products
router.get('/', productsController.getAllProducts);

// READ - GET product by id
router.get('/:idProduct', productsController.getProductById);

// CREATE - POST new product
router.post('/', productsController.createNewProduct);

// UPDATE - PATCH product
router.patch('/:idProduct', productsController.updateProduct);

// DELETE - DELETE product
router.delete('/:idProduct', productsController.deleteProduct);

module.exports = router;
