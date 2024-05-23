const express = require("express");
const app = express();
const itemRoutes = require("./routes/items");
const ExpressError = require("./expressError");

app.use(express.json());
app.use("/items", itemRoutes);