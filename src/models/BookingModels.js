const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
    User: {type: mongoose.Schema.Types.ObjectId, ref: User, required: true},
    Kamar: {type: mongoose.Schema.Types.ObjectId, ref: Kamar, required: true},
    checkIn: {type: Date, required: true},
    checkOut: {type: Date, required: true},
    totalPrice: {type: Number, required: true}
})

module.exports = mongoose.model("Booking", BookingSchema);