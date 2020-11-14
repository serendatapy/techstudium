'use strict'

// Importing the packages
const _ = require('lodash');

// Importing the neccessary files
const config = require('./config.json');

// Setting the default configuration
const defaultConfig = config.development;
const environment = process.env.NODE_ENV || 'development';
const environmentConfig = config[environment];
const finalConfig = _.merge(defaultConfig, environmentConfig);

global.gConfig = finalConfig;