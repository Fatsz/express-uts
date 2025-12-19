const UsersModels = require('../models/users');

const getAllUsers = async (req, res) => {

    try {

        const [data] = await UsersModels.getAllUsers();
    
        res.json({
            message: "GET users success",
            data: data,
        });
        
    } catch (error) {
        
        res.status(500).json({
            message: "Server Error",
            serverMessage: error,
        });

    }

}

const createNewUsers = (req, res) => {
    res.json({
        message: "POST users success",
    });
}

module.exports = {
    getAllUsers,
    createNewUsers
}