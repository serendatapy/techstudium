'use strict'

// Importing the packages
const router = require('express').Router();

// Importing the neccessary files
const userController = require('./controllers/user');
const categoryController = require('./controllers/category');
const questionController = require('./controllers/question');
const answerController = require('./controllers/answer');
const statisticController = require('./controllers/statistic');

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

// Answer
router.post('/createAnswer', answerController.create);

// Statistic
router.post('/createStatistics', statisticController.create);
router.get('/statistics', statisticController.get);
router.get('/statistics/:userId', statisticController.getOne);

// Export the router
module.exports = router;