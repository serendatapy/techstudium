'use strict'

// Importing the packages
const mysql = require('mysql');

// Set up the connection to mysql
const connection = mysql.createConnection(
  global.gConfig.mysql.connection
);

// Connect to mysql
connection.connect((err) => {
  if (err) console.error(`Error in connecting to the database`);
  else console.log(`Connected to the database!`);
})

module.exports = connection;