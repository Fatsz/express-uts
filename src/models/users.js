const dbPool = require('../config/database');
const crypto = require('crypto');

const getAllUsers = () => {
    const SQLQuery = 'SELECT * FROM users';

    return dbPool.execute(SQLQuery);
}

const createNewUsers = (body) => {
    const hashedPassword = crypto.createHash('md5').update(body.password).digest('hex');
    const SQLQuery = `INSERT INTO users (username, email, password) VALUES ('${body.username}', '${body.email}', '${hashedPassword}')`;
    
    return dbPool.execute(SQLQuery);
}

const updateUsers = (body, idUsers) => {
    const hashedPassword = crypto.createHash('md5').update(body.password).digest('hex');
    const SQLQuery = `UPDATE users 
                    SET username='${body.username}', email='${body.email}', password='${hashedPassword}' WHERE id_users='${idUsers}'`;

    return dbPool.execute(SQLQuery);
}

const deleteUsers = (idUsers) => {
    const SQLQuery = `DELETE FROM users WHERE id_users='${idUsers}'`;

    return dbPool.execute(SQLQuery);
}

module.exports = {
    getAllUsers,
    createNewUsers,
    updateUsers,
    deleteUsers
}