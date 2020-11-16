'use strict';

// Importing the models
const db = require('../models');

// Adding a new question in the database
exports.create = async (req, res) => {
  try {
    const question = await db.Question.create(req.body)
    // Create the question
    res.status(201).send(question);
  } catch (err) {
    // Log an error message 
    console.error(`Failed to create the question with error ${err}`);
    // Send an Internal Server Error response
    res.sendStatus(500);
  }
}