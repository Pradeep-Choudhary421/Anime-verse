const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const animeData = require("./Routes/Route")
require("dotenv").config({ path: "./config/.env" });
app.use(express.json());
app.use(express.urlencoded({ extended:true}));

app.use(morgan("common"));
app.use(cors());
app.use("/api", animeData)

module.exports = app;
