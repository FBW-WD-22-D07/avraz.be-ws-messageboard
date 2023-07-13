
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userControllers');

// POST /user/login
router.post('/login', userController.loginUser);

module.exports = router;

