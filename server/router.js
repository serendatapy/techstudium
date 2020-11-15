'use strict'

// Importing the packages
const router = require('express').Router();

// Importing the neccessary files
const userController = require('./controllers/user')
const categoryController = require('./controllers/category')

// User
router.get('/getAllUsers', userController.getAll);
router.post('/register', userController.create);
router.post('/login',userController.login);

// Category
router.post('/createCategory', categoryController.create);
router.get('/categories', categoryController.get);

// Export the router
module.exports = router;