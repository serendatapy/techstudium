'use strict';

// Importing the models
const db = require('../models');

// Importing the packages
const bcrypt = require('bcrypt');

// Getting all the users from the database
exports.getAll = async (req, res) => {
  try {
    // Await to receive all the users from the database
    const users = await db.User.findAll();
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

// Check if the user exists and if it doesn't, create a new user
exports.create = async (req, res) => {
  // Retrieve the information from the user
  const { email, password, firstName, lastName } = req.body;
  // Look for the user in the database
  const user = await db.User.findOne({ where: { email: email } });
  // If the email address is found, notify the user that it already exists
  if (user) {
    return res
      .status(409)
      .send({ error: '409', message: 'User already exists' });
  }
  try {
    // If the user doesn't provide a password, catch the error
    if (password === '') throw new Error();
    // Encrypt the password created by the user
    const hash = await bcrypt.hash(password, 10);
    // Create a new user with the provided information and the encrypted password
    const user = await db.User.create({
      email: email,
      password: hash,
      firstName: firstName,
      lastName: lastName
    })
    // Set the session unique id to the user id and send the newly created user information
    req.session.uid = user.id;
    res.status(201).send(user);
  } catch (err) {
    // Log an error message 
    console.error(`Failed to create account with error ${err}`);
    // Send an Internal Server Error response
    res.sendStatus(500);
  }
}

// Check if the user exists and has provided the correct login information
exports.login = async (req, res) => {
  try {
    // Retrieve the email and the password from the user
    const { email, password } = req.body;
    // Look for the user in the database
    const user = await db.User.findOne({ where: { email: email } });
    // If the user is not found, the method will catch the error
    // If the user is found, validate the inputted password
    const validatePass = await bcrypt.compare(password, user.password);
    // If the password doesn't match, throw an error
    if (!validatePass) throw new Error();
    // If the password matches, set the session unique id to the user id and send the user information
    req.session.uid = user.id;
    res.status(200).send(user);
  }
  catch (err) {
    res
      // Send an unauthorized status code
      .status(401)
      // Notify the user of an unsuccessful login
      .send({
        err: '401',
        message: 'Username or password is incorrect'
      });
  }
}