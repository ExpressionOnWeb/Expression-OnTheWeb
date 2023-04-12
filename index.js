'use strict';
const express = require('express');
const serverless = require('serverless-http');
const app = express();

const router = express.Router();
app.get('/', (req, res) => {
  res.send('<h1>Hello from Express.js!</h1>');
});

module.exports = app;
module.exports.handler = serverless(app);