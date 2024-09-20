const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
    userId: {type: mongoose.Schema.Types.ObjectId, ref: "User", required: true},
    kamarId: {type: mongoose.Schema.Types.ObjectId, ref: "Kamar", required: true},
    checkIn: {type: Date, required: true},
    checkOut: {type: Date, required: true},
    totalPrice: {type: Number, required: true},
    status: {
        type: String,
        enum: ['Pending', 'Confirmed', 'Cancelled', 'Failed', 'Completed', 'Refunded'],
        default: 'Pending'
    }
}, {timestamps: true});

module.exports = mongoose.model("Booking", BookingSchema);