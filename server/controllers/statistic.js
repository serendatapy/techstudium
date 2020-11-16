'use strict';

// Importing the models
const db = require('../models');

// Getting all the statistics from the database
exports.get = async (req, res) => {
  try {
    // Await to receive all the statistics from the database
    const statistics = await db.Statistic.findAll({
      include: [
        {
          model: db.User,
          attributes: ["id", "firstName"]
        }
      ]
    });
    // Send a standard response for a successful HTTP request
    res.status(200);
    // Send all the statistics
    res.send(statistics);
  } catch (err) {
    // Log an error message 
    console.error(`Failed to retrieve all statistics in the controller with error ${err}`);
    // Send an Internal Server Error response
    res.sendStatus(500);
  }
}

// Getting statistics based on name from the database
exports.getOne = async (req, res) => {
  try {
    // Await to receive the category
    const statistic = await db.Statistic.findOne({
      where: { Statistics:  req.params.userId},
      include: [
        {
          model: db.Question,
          attributes: ["id", "title"]
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

// Create a statistic 
exports.create = async (req, res) => {
  try {
    const statistic = await db.Statistic.create(req.body)
    // Create the category
    res.status(201).send(statistic);
  } catch (err) {
    // Log an error message 
    console.error(`Failed to create the statistics with error ${err}`);
    // Send an Internal Server Error response
    res.sendStatus(500);
  }
}