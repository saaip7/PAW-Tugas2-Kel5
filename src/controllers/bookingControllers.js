const Booking = require("../models/BookingModels");
const Kamar = require("../models/KamarModels");
const User = require("../models/UserModels");

// POST: Membuat booking baru
exports.createBooking = async (req, res) => {
    const { userId, kamarId, checkIn, checkOut } = req.body;

    try {
        const kamar = await Kamar.findById(kamarId);
        if (!kamar || !kamar.availability) {
            return res.status(400).json({ message: "Kamar tidak tersedia" });
        }

        // Pastikan checkIn dan checkOut adalah objek Date
        const checkIn = new Date(checkIn);
        const checkOut = new Date(checkOut);

        if (isNaN(checkIn.getTime()) || isNaN(checkOut.getTime())) {
            return res.status(400).json({ message: "Tanggal tidak valid" });
        }

        // Hitung jumlah malam
        const numberOfNights = (checkOut - checkIn) / (1000 * 60 * 60 * 24);

        if (numberOfNights <= 0) {
            return res.status(400).json({ message: "Check-out date harus lebih besar dari check-in date" });
        }

        const totalPrice = numberOfNights * kamar.pricePerNight;

        const booking = new Booking({
            user: userId,
            kamar: kamarId,
            checkInDate: checkIn,
            checkOutDate: checkOut,
            totalPrice,
        });

        await booking.save();

        // Update availability kamar
        await Kamar.findByIdAndUpdate(kamarId, { availability: false });

        res.status(200).json({ message: "Booking berhasil dibuat", data: booking });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


// GET: Mendapatkan semua booking
exports.getAllBooking = async (req, res) => {
    try {
        const bookings = await Booking.find().populate("userId kamarId");
        res.status(200).json({ data: bookings });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// GET: Mendapatkan booking berdasarkan ID
exports.getBookingById = async (req, res) => {
    const { id } = req.params;
    try {
        const booking = await Booking.findById(id).populate("userId kamarId");
        if (!booking) {
            return res.status(404).json({ message: "Booking tidak ditemukan" });
        }
        res.status(200).json({ data: booking });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// PUT: Update status booking (misalnya untuk konfirmasi atau pembatalan)
exports.updateBooking = async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    try {
        const booking = await Booking.findById(id);
        if (!booking) {
            return res.status(404).json({ message: "Booking tidak ditemukan" });
        }

        booking.status = status;
        await booking.save();

        if (status === "cancelled") {
            await Kamar.findByIdAndUpdate(booking.kamar, { availability: true });
        }

        res.status(200).json({ message: "Status booking diperbarui", data: booking });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// DELETE: Menghapus booking
exports.deleteBooking = async (req, res) => {
    const { id } = req.params;

    try {
        const booking = await Booking.findByIdAndDelete(id);
        if (!booking) {
            return res.status(404).json({ message: "Booking tidak ditemukan" });
        }

        await Kamar.findByIdAndUpdate(booking.kamar, { availability: true });
        res.status(200).json({ message: "Booking berhasil dihapus" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};