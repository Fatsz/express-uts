const dbPool = require('../config/database');

const getAllUsers = () => {
    const SQLQuery = 'SELECT * FROM express_uts.users';

    return dbPool.execute(SQLQuery);
}

module.exports = {
    getAllUsers
}