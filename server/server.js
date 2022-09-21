// Entry point for backend application
// Responsible for creating and initializing Express app

require("dotenv").config();

// Importing Express
const express = require("express");

// Creating an instance of Express
const app = express();

const port = process.env.PORT || 4000;

// Listener
app.listen(3000, () => {
  console.log(`\n🌟 Listening on port 3000 🌟\n`);
});
