bookingRoutes = require("express").Router();
const { createBooking, getAllBooking, getBookingById, updateBooking, deleteBooking } = require("../controllers/bookingControllers");

bookingRoutes.post("/", createBooking);
bookingRoutes.get("/", getAllBooking);
bookingRoutes.get("/:id", getBookingById);
bookingRoutes.put("/:id", updateBooking);
bookingRoutes.delete("/:id", deleteBooking);

module.exports = bookingRoutes;