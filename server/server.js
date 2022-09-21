require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`\n🌟 Listening on port ${port} 🌟\n`);
});


// New feature
const newfeature = "New Feature!";

// New feature 2
const newfeature2 = 'new 2!'