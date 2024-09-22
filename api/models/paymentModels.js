const mongoose = require('mongoose');
const Booking = require('./BookingModels');

const paymentSchema = new mongoose.Schema({
    bookingId: {type: mongoose.Schema.Types.ObjectId, ref: 'Booking', required: true},
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    paymentMethod: {type: String, required: true},
    paymentStatus: {
        type: String,
        enum: ['Pending', 'Paid', 'Failed'],
        default: 'Pending'
    },
    amountPaid: { type: Number, required: true},
    paymentDate: {type: Date, default: Date.now}
}, {timestamps: true});

const Payment = mongoose.model('Payment', paymentSchema);

module.exports = Payment;