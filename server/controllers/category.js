'use strict';

// Importing the models
const db = require('../models');

// Getting all the categories from the database
exports.get = async (req, res) => {
  try {
    // Await to receive all the categories from the database
    const categories = await db.category.findAll();
    // Send a standard response for a successful HTTP request
    res.status(200);
    // Send all the users
    res.send(categories);
  } catch (err) {
    // Log an error message 
    console.error(`Failed to retrieve all categories in the controller with error ${err}`);
    // Send an Internal Server Error response
    res.sendStatus(500);
  }
}

// Getting all the users from the database
exports.create = async (req, res) => {
  // Retrieve the category
  const { category_name } = req.body;
  try {
    const category = await db.category.create({
      name: category_name
    })
    // Create the category
    res.status(201).send(category);
  } catch (err) {
    // Log an error message 
    console.error(`Failed to create the category with error ${err}`);
    // Send an Internal Server Error response
    res.sendStatus(500);
  }
}