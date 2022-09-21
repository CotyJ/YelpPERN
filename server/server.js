require("dotenv").config();
const port = process.env.PORT || 3000;

// Express
const express = require("express");
const app = express();


// Listening
app.listen(3000, () => {
  console.log(`\n🌟 Listening on port 3000 🌟\n`);
});
