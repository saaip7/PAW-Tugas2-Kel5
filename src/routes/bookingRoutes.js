bookingRoutes = require("express").Router();
const { createBooking } = require("../controllers/bookingControllers");

bookingRoutes.post("/", createBooking);

module.exports = bookingRoutes;