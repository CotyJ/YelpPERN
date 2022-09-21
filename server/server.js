// Entry point for backend application
// Responsible for creating and initializing Express app

// Necessary for Dotenv to run. Looks for the config file .env
require("dotenv").config();

// Importing Express
const express = require("express");

// Creating an instance of Express
const app = express();

// Define the port from .env
const port = process.env.PORT || 3000

// Listener with PORT variable and template string.
app.listen(3000, () => {
  console.log(`\n🌟 Listening on port 3000 🌟\n`);
});


// New feature
const newfeature = "New Feature!";