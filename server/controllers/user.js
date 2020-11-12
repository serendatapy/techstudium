'use strict';

// Importing the models
const db = require('../models');

// Getting all the users from the database
exports.getAll = async (req, res) => {
  try {
    // Await to receive all the users from the database
    const users = await db.user.findAll();
    // Send a standard response for a successful HTTP request
    res.status(200);
    // Send all the users
    res.send(users);
  } catch (err) {
    // Log an error message 
    console.error(`Failed to retrieve all users in the controller with error ${err}`);
    // Send an Internal Server Error response
    res.sendStatus(500);
  }
}

exports.create = async (req, res) => {
  const { email, password } = req.body;
  const user = await db.user.findOne({ email: email });
  if (user) {
    return res
      .status(409)
      .send({ error: '409', message: 'User already exists' });
  }
  try {
    if (password === '') throw new Error();
    const hash = await bcrypt.hash(password, 10);
    const newUser = new User({
      ...req.body,
      password: hash,
    });
    const user = await newUser.save();
    req.session.uid = user._id;
    res.status(201).send(user);
  } catch (err) {
    // Log an error message 
    console.error(`Failed to create account with error ${err}`);
    // Send an Internal Server Error response
    res.sendStatus(500);
  }
}