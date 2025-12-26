const ProductsModels = require('../models/products');

const getAllProducts = async (req, res) => {

    try {

        const [data] = await ProductsModels.getAllProducts();
    
        res.json({
            message: "GET all products success",
            data: data,
        });
        
    } catch (error) {
        
        res.status(500).json({
            message: "Server Error",
            serverMessage: error,
        });

    }

}

const createNewProduct = async (req, res) => {
    const {body} = req;

    try {

        await ProductsModels.createNewProduct(body);
        res.status(201).json({
            message: "CREATE new product success",
            data: body
        })

    } catch (error) {

        res.status(500).json({
            message: "Server Error",
            serverMessage: error,
        });

    }
}

const updateProduct = async (req, res) => {
    const {idProduct} = req.params;
    const {body} = req;

    try {

        await ProductsModels.updateProduct(body, idProduct);

        res.json({
            message: "UPDATE product success",
            data: {
                id_product: idProduct,
                ...body
            },
        });

    } catch (error) {

        res.status(500).json({
            message: "Server Error",
            serverMessage: error,
        });

    }
}

const deleteProduct = async (req, res) => {
    const {idProduct} = req.params;

    try {

        await ProductsModels.deleteProduct(idProduct);

        res.json({
            message: "DELETE product success",
            data: null,
        });

    } catch (error) {

        res.status(500).json({
            message: "Server Error",
            serverMessage: error,
        });

    }
}

const getProductById = async (req, res) => {
    const {idProduct} = req.params;

    try {

        const [data] = await ProductsModels.getProductById(idProduct);

        if(data.length === 0) {
            return res.status(404).json({
                message: "Product not found",
                data: null,
            });
        }

        res.json({
            message: "GET product by id success",
            data: data,
        });

    } catch (error) {

        res.status(500).json({
            message: "Server Error",
            serverMessage: error,
        });

    }
}

module.exports = {
    getAllProducts,
    createNewProduct,
    updateProduct,
    deleteProduct,
    getProductById,
}
