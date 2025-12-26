const express = require('express');

const usersController = require('../controllers/users')

const router = express.Router();

//READ - GET
router.get('/', usersController.getAllUsers);

// CREATE - POST
router.post('/register', usersController.createNewUsers);
router.post('/login', usersController.login);

// UPDATE - PATCH (full update with password)
router.patch('/:idUser', usersController.updateUsers);

// UPDATE - PATCH profile (edit profile tanpa password)
router.patch('/:idUser/profile', usersController.editProfile);

// DELETE - DELETE
router.delete('/:idUser', usersController.deleteUsers);

module.exports = router;