require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`\n🌟 Listening on port ${port} 🌟\n`);
});

const newFeature = "New feature";
const new2 = '2';

// adding a 3rd feature
const new3 = 333;