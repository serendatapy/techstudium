'use strict'

// Importing the packages
const express = require('express');
const cors = require('cors');
const session = require('express-session');

// Importing the neccessary files
const configuration = require('./config/config');
const config = global.gConfig;
const router = require('./router');
const db = require('./models');

// Setting up an app
const app = express();

// Setting up cors
app.use(cors(config.cors));

// Parsing incoming requests with JSON payloads
app.use(express.json());

// Setting up a session
app.use(session(config.session));

// Making use of the router
app.use(router);

app.get('*', (req, res) => {
  res.status(404).send('Sorry, not found 😞');
});

// Setting up the server
(async () => {
  try {
    //await db.sequelize.sync({ force: true });
    await db.sequelize.sync();
    const SERVER_PORT = config.server_port;
    app.listen(SERVER_PORT, () => {
      console.log(`🚀 Server is listening on port ${SERVER_PORT}!`) // eslint-disable-line no-console
    })
  }
  catch (err) {
    console.error(`😞 Sorry, something went wrong! ${err}`); // eslint-disable-line no-console
  }
})();