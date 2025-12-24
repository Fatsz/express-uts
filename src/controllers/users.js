const database = require('../config/database');
const UsersModels = require('../models/users');
const crypto = require('crypto');

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

const login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({
            message: "Email dan password wajib diisi",
        });
    }

    try {
        const [rows] = await UsersModels.getUserByEmail(email);

        if (!rows || rows.length === 0) {
            return res.status(401).json({
                message: "Kredensial tidak valid",
            });
        }

        const user = rows[0];
        const hashed = crypto.createHash('md5').update(password).digest('hex');

        if (user.password !== hashed) {
            return res.status(401).json({
                message: "Kredensial tidak valid",
            });
        }

        res.json({
            message: "LOGIN success",
            data: {
                id_users: user.id_users,
                username: user.username,
                email: user.email,
            },
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
    deleteUsers,
    login,
}