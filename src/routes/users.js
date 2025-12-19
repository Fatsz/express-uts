const express = require('express');

const usersController = require('../controllers/users')

const router = express.Router();

router.get('/', usersController.getAllUsers);

// CREATE - POST
router.post('/', usersController.createNewUsers);

module.exports = router;