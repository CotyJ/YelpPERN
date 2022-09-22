require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`\n🌟 Listening on port ${port} 🌟\n`);
});

const newfeature = "New Feature!";
const newfeature2 = 'new 2!';
const newfeature3 = 3;
const newFeature4 = 4444;

// new feature 5, will other comments from main stay?
const newfeature5 = 'five';
