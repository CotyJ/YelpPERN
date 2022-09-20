// Entry point for backend application
// Responsible for creating and initializing Express app

// Importing Express
const express = require("express");

// Creating an instance of Express
const app = express();


// Listener
app.listen(3000, () => {
  console.log(`\n🌟 Listening on port 3000 🌟`);
});
