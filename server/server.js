// Necessary for Dotenv to run. Looks for the config file .env
require("dotenv").config();

// Importing Express
const express = require("express");

// Creating an instance of Express
const app = express();

// Define the port from .env
const port = process.env.PORT || 3000;

// Listener with PORT variable and template string.
app.listen(port, () => {
  console.log(`\n🌟 Listening on port ${port} 🌟\n`);
});
