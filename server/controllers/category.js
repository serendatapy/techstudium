'use strict';

// Importing the models
const db = require('../models');

// Getting all the categories from the database
exports.get = async (req, res) => {
  try {
    // Await to receive all the categories from the database
    const categories = await db.Category.findAll({
      include: [
        {
          model: db.Question,
          attributes: ["id", "title"],
          include: [
            {
              model: db.Answer,
              attributes: ["id", "text", "isCorrect", "explanation"]
            }
          ]
        }
      ]
    });
    // Send a standard response for a successful HTTP request
    res.status(200);
    // Send all the categories
    res.send(categories);
  } catch (err) {
    // Log an error message 
    console.error(`Failed to retrieve all categories in the controller with error ${err}`);
    // Send an Internal Server Error response
    res.sendStatus(500);
  }
}

// Getting category based on name from the database
exports.getOne = async (req, res) => {
  try {
    // Await to receive the category
    const category = await db.Category.findOne({
      where: { name:  req.params.name},
      include: [
        {
          model: db.Question,
          attributes: ["id", "title"],
          include: [
            {
              model: db.Answer,
              attributes: ["id", "text", "isCorrect", "explanation"]
            }
          ]
        }
      ]
    })
    // Send a standard response for a successful HTTP request
    res.status(200);
    // Send the category
    res.send(category);
  } catch (err) {
    // Log an error message 
    console.error(`Failed to retrieve the category in the controller with error ${err}`);
    // Send an Internal Server Error response
    res.sendStatus(500);
  }
}

// Create a category 
exports.create = async (req, res) => {
  // Retrieve the category
  const { category_name } = req.body;
  try {
    const category = await db.Category.create({
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