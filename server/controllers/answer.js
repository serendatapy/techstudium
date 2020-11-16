'use strict';

// Importing the models
const db = require('../models');

// Adding a new answer in the database
exports.create = async (req, res) => {
  try {
    const answer = await db.Answer.create(req.body)
    // Create the answer
    res.status(201).send(answer);
  } catch (err) {
    // Log an error message 
    console.error(`Failed to create the answer with error ${err}`);
    // Send an Internal Server Error response
    res.sendStatus(500);
  }
}