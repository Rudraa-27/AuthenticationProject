require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const authRouter = require("./routes/authRouter");

const app = express();

const PORT = 3000;

connectDB();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello!");
});

app.use("/api/auth", authRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

