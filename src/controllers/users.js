const database = require('../config/database');
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

const createNewUsers = async (req, res) => {
    const {body} = req;

    try {

        await UsersModels.createNewUsers(body);
        res.json({
            message: "CREATE new user Success",
            data: body
        })

    } catch (error) {

        res.status(500).json({
            message: "Server Error",
            serverMessage: error,
        });

    }
}

const updateUsers = async (req, res) => {
    const {idUser} = req.params;
    const {body} = req;

    try {

        await UsersModels.updateUsers(body, idUser);
        res.json({
            message: "UPDATE users success",
            data: {
                id: idUser,
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

const deleteUsers = async (req, res) => {
    const {idUser} = req.params;
    try {
        
        await UsersModels.deleteUsers(idUser);
        res.json({
            message: "DELETE user success",
            data: null
        });

    } catch (error) {
        
        res.status(500).json({
            message: "Server Error",
            serverMessage: error,
        });
        
    }
}

module.exports = {
    getAllUsers,
    createNewUsers,
    updateUsers,
    deleteUsers
}