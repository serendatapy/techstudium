'use strict'

// Importing the packages
const router = require('express').Router();

// Importing the neccessary files
const userController = require('./controllers/user')
const categoryController = require('./controllers/category')
const questionController = require('./controllers/question')

// User
router.get('/getAllUsers', userController.getAll);
router.post('/register', userController.create);
router.post('/login',userController.login);

// Category
router.post('/createCategory', categoryController.create);
router.get('/categories', categoryController.get);
router.get('/categories/:name', categoryController.getOne);

// Question
router.post('/createQuestion', questionController.create);

// Export the router
module.exports = router;