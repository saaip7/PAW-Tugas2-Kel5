const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const process = require("process");
const app = express();
const port = 3000;

// DOTENV CONFIG
dotenv.config();

// MIDDLEWARE
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(morgan("dev"));

// CORS
app.use(cors());

// SERVER
mongoose.connect(`${process.env.mongoDB2}`)
  .then(() => {
    console.log("Connected to MongoDB")
  })
  .catch((err) => {
    console.log(err);
  });


// Use the routes
app.use('/tes', require('./src/routes/tesRoutes'));

// APP START
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});