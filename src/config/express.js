const express = require("express");
const app = express();
const port = 3001;

// this allows express to get body info for POST requests
app.use(express.json());

module.exports = { app, port };
