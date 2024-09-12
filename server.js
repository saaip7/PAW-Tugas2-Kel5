const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;
require('dotenv').config();

// Import routes
const tesRoutes = require('./routes/tesRoutes');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Use the routes
app.use('/tes', tesRoutes);

mongoose.connect(`${process.env.mongoDB}`)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(port, () => {
      console.log(`Listening at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
