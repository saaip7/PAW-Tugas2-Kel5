const Payment = require('../models/paymentModels');
const Booking = require('../models/BookingModels');
const User = require('../models/UserModels');
const Kamar = require('../models/KamarModels');

// POST: membuat payment
exports.createPayment = async (req, res) => {
    const { bookingId, userId, paymentMethod, amountPaid } = req.body;

    try {
        // menemukan booking dan user berdasarkan ID
        const booking = await Booking.findById(bookingId);
        const user = await User.findById(userId);
        
        // cek kondisi
        if (!booking) {
            return res.status(404).json({ message: 'Kode booking tidak ditemukan' });
        }

        if (booking.totalPrice !== amountPaid) {
            return res.status(400).json({ message: 'Jumlah pembayaran tidak sesuai' });
        }

        if (!user) {
            return res.status(400).json({ message: 'User tidak ditemukan' });
        }

        if (booking.status === 'Confirmed') {
            return res.status(400).json({ message: 'Booking Anda sudah dibayar' });
        }

        const payment = new Payment({
            bookingId: bookingId,
            userId: userId,
            paymentMethod,
            amountPaid
        });

        await payment.save();

        // Update status booking menjadi "Confirmed"
        await Booking.findByIdAndUpdate(bookingId, { status: "Confirmed" });

        const updateBooking = await Booking.findById(bookingId)

        // Update status payment menjadi "Paid"
        await Payment.findOneAndUpdate({ bookingId: bookingId }, { paymentStatus: "Paid" });

        res.status(200).json({
            message: 'Pembayaran berhasil dan booking Anda berhasil dikonfirmasi',
            method: paymentMethod,
            amount: amountPaid,
            detail: updateBooking
        });

    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// GET: menampilkan semua payment
exports.getAllPayment = async (req, res) => {
    Payment.find()
    .then((payment) => {
        res.status(200).json({
            data: payment
        });
    })
    .catch((err) => {
        res.status(400).json({
            error: err
        });
    });
};

// GET: menampilkan payment by id
exports.getPaymentById = async (req, res) => {
    try {
        const payment = await Payment.findById(req.params.paymentId).populate('bookingId').populate('userId');
        if(!payment) {
            return res.status(404).json({ message:'Pembayaran tidak ditemukan. Cari dengan Id lain' });
        }
        res.status(200).json(payment);
    } catch(err) {
        res.status(500).json({error: err.message})
    } 
};

// PUT: Edit metode, status, dan jumlah payment dengan id sebagai params
exports.updatePayment = async (req, res) => {
    const { paymentMethod, paymentStatus, amountPaid } = req.body;
    try {
        const payment = await Payment.findByIdAndUpdate(req.params.paymentId, {paymentMethod: paymentMethod}, {paymentStatus: paymentStatus}, {amountPaid: amountPaid});
        if(!payment) {
            return res.status(404).json({ message:'Pembayaran tidak dapat diperbarui. Cari dengan Id lain' });
        }
        
        const updatePayment = await Payment.findById(req.params.paymentId)
        res.status(200).json({ message: 'Pembayaran Anda berhasil diperbarui', detail: updatePayment });
    } catch(err) {
        res.status(500).json({error: err.message})
    }   
};

//DELETE: delete payment by Id
exports.deletePayment = async (req, res ) => {
    try {
        const payment = await Payment.findByIdAndDelete(req.params.paymentId)
        if(!payment) {
            return res.status(404).json({ message:'Pembayaran tidak dapat dihapus. Cari dengan Id lain' });
        }
        res.status(200).json({ message: 'Pembayaran Anda berhasil dihapus'});
        const booking = await Booking.findById(payment.bookingId);
        if(booking) {
            // update pada status booking dan ketersediaan kamar
            await Booking.findByIdAndUpdate(payment.bookingId, {status: "Cancelled"});
            await Kamar.findByIdAndUpdate(booking.kamarId, {availability: "true"});
        }
    } catch(err) {
        res.status(500).json({error: err.message})
    }
}