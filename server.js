const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

app.use(cors());
app.use(express.json());

const postRoutes = require("./routes/postRoutes");

app.use("/posts", postRoutes);

app.get("/", (req, res) => {
  res.send("Telegraph clone");
});

module.exports = app
