const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require('./src/config/corsConfig');
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const process = require("process");
const app = express();

// DOTENV CONFIG
dotenv.config();

// MIDDLEWARE
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(morgan("dev"));

// CORS
app.use(cors);

// MONGODB CONNECTION
if (!process.env.MONGO_URI) {
  throw Error("Database connection string not found");
}
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Succesfully connected to MongoDB");
  }).catch((err) => {
    console.log("Failed to connect to MongoDB");
    console.log(err);
  });

// ROUTES
app.get("/", (req, res) => {
  res.send("Hello from PAW Backend Service!");
});
app.use("/user", require("./src/routes/UserRoutes"));
app.use("/kamar", require("./src/routes/KamarRoutes"));
app.use("/booking", require("./src/routes/bookingRoutes"));
app.use("/payment", require("./src/routes/paymentRoutes"));
app.use("/review", require("./src/routes/ReviewRoutes"));

// APP START
app.listen(5000, () => {
  console.log("Server is running on http://localhost:5000");
});