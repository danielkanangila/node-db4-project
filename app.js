const express = require("express");
const cors = require("cors");
const recipesRouter = require("./recipes/recipe-router");

const app = express();
app.use(cors());

app.use("/api", recipesRouter);

module.exports = app;
