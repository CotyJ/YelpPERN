require("dotenv").config();

const express = require("express");
const morgan = require("morgan");
const app = express();
const port = process.env.PORT || 3000;

app.use(morgan("tiny"));

// Get All Restaurants
app.get("/api/v1/restaurants", (req, res) => {
  console.log("get all ran")
  res.status(200).json({
    status: "success",
    data: {
      restaurant: ["McDonalds, Wendys"],
    }
  });
});

// Get ONE Restaurant
app.get("/api/v1/restaurants/:id", (req, res) => {
  console.log("req.body ", req.body, ", req.params ", req.params);
  res.send(req.params);
});

// Create A Restaurant
app.post("/api/v1/restaurants", (req, res) => {
  console.log(req.body);
});

// Update A Restaurant
app.put("/api/v1/restaurants/:id", (req, res) => {

});



app.listen(port, () => {
  console.log(`\n🌟 Listening on port ${port} 🌟\n`);
});
