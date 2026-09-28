require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");

const app = express();

const PORT = 3000;

connectDB();

app.get("/", (req, res) => {
  res.send("Hello!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});