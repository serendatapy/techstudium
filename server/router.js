'use strict'

// Importing the packages
const router = require('express').Router();

// Importing the neccessary files
const userController = require('./controllers/user')

//router.post('/register', userController.create);
router.get('/getAllRoutes', userController.getAll);

// Export the router
module.exports = router;