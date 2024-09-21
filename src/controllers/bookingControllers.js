const Booking = require("../models/BookingModels");
const User = require("../models/UserModels");
const Kamar = require("../models/KamarModels");

// POST: Membuat booking baru
exports.createBooking = async (req, res) => {
    const { userId, kamarId, checkIn, checkOut, totalPrice } = req.body;
    const user = await User.findById(userId);
    const kamar = await Kamar.findById(kamarId);

    // cek ketersediaan kamar
    if (kamar.availability === 'true') {
        return res.status(400).json({ message: 'Kamar sudah dipesan. Silakan pesan kamar lain' });
    }
    const booking = new Booking({
        userId: userId,
        kamarId: kamarId,
        checkIn,
        checkOut,
        totalPrice,
    });

    booking
        .save()
        .then(() => {
            res.status(200).json({
                message: "Booking berhasil dibuat!",
                data: {
                    user,
                    kamar
                }
            });
        })
        .catch((err) => {
            res.status(400).json({
                error: err
            });
        });
    // update ketersediaan kamar
    await Kamar.findByIdAndUpdate(kamarId, {availability: false});
};

// GET: Mendapatkan semua booking
exports.getAllBooking = async (req, res) => {
    Booking.find()
        .populate("customer") // Mengisi detail customer (menggunakan relasi)
        .populate("room")     // Mengisi detail kamar (menggunakan relasi)
        .then((bookings) => {
            res.status(200).json({
                data: bookings
            });
        })
        .catch((err) => {
            res.status(400).json({
                error: err
            });
        });
};

// GET: Mendapatkan booking berdasarkan ID
exports.getBookingById = async (req, res) => {
    const { id } = req.params;

    Booking.findById(id)
        .populate("user") // Mengisi detail user
        .populate("kamar")     // Mengisi detail kamar
        .then((booking) => {
            if (!booking) {
                return res.status(404).json({
                    message: "Booking tidak ditemukan"
                });
            }
            res.status(200).json({
                data: booking
            });
        })
        .catch((err) => {
            res.status(500).json({
                message: err.message
            });
        });
};

// PUT: Mengupdate booking berdasarkan ID
exports.updateBooking = async (req, res) => {
    const { id } = req.params;
    const { user, kamar, checkIn, checkOut, totalPrice } = req.body;

    Booking.findByIdAndUpdate(id, { user, kamar, checkIn, checkOut, totalPrice })
        .then(() => {
            res.status(200).json({
                message: "Booking berhasil diupdate!"
            });
        })
        .catch((err) => {
            res.status(400).json({
                error: err
            });
        });
};

// DELETE: Menghapus booking berdasarkan ID
exports.deleteBooking = async (req, res) => {
    const { id } = req.params;

    Booking.findByIdAndDelete(id)
        .then(() => {
            res.status(200).json({
                message: "Booking berhasil dihapus!"
            });
        })
        .catch((err) => {
            res.status(400).json({
                error: err
            });
        });
};
