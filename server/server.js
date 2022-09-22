require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`\n🌟 Listening on port ${port} 🌟\n`);
});

const newFeature = "New feature";
const new2 = '2';
const new3 = 333;

// new feature 4, will it be the only one?
const new4 = 4444;
