'use strict'

// Importing the packages
const router = require('express').Router();

// Importing the neccessary files
const userController = require('./controllers/user')

// TO BE DELETED FOR SECURITY REASONS
router.get('/getAllRoutes', userController.getAll);
// TO BE DELETED FOR SECURITY REASONS

router.post('/register', userController.create);
router.post('/login',userController.login);

// Export the router
module.exports = router;