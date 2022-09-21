require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`\n🌟 Listening on port ${port} 🌟\n`);
});

const newfeature = "New Feature!";
const newfeature2 = 'new 2!';

// new feature 3
const newfeature3 = 3;