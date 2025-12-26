const dbPool = require('../config/database');

const getAllProducts = () => {
    const SQLQuery = 'SELECT * FROM products';

    return dbPool.execute(SQLQuery);
}

const createNewProduct = (body) => {
    const SQLQuery = `INSERT INTO products (nama_product, deskripsi_product, image_product, harga_product) 
                      VALUES ('${body.nama_product}', '${body.deskripsi_product}', '${body.image_product}', '${body.harga_product}')`;
    
    return dbPool.execute(SQLQuery);
}

const updateProduct = (body, idProduct) => {
    const SQLQuery = `UPDATE products 
                    SET nama_product='${body.nama_product}', deskripsi_product='${body.deskripsi_product}', 
                        image_product='${body.image_product}', harga_product='${body.harga_product}' 
                    WHERE id_product='${idProduct}'`;

    return dbPool.execute(SQLQuery);
}

const deleteProduct = (idProduct) => {
    const SQLQuery = `DELETE FROM products WHERE id_product='${idProduct}'`;

    return dbPool.execute(SQLQuery);
}

const getProductById = (idProduct) => {
    const SQLQuery = 'SELECT * FROM products WHERE id_product = ? LIMIT 1';
    return dbPool.execute(SQLQuery, [idProduct]);
}

module.exports = {
    getAllProducts,
    createNewProduct,
    updateProduct,
    deleteProduct,
    getProductById,
}
