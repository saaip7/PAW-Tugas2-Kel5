const Review = require("../models/ReviewModels");
const Kamar = require("../models/KamarModels");

// POST: Membuat review baru
exports.createReview = async (req, res) => {
    const { userId, kamarId, rating, comment } = req.body;

    try {
        const kamar = await Kamar.findById(kamarId);
        if (!kamar) {
            return res.status(404).json({ message: "Kamar tidak ditemukan" });
        }

        const review = new Review({
            userId,
            kamarId,
            rating,
            comment
        });

        await review.save();

        res.status(200).json({ message: "Review berhasil dibuat", data: review });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// GET: Mendapatkan semua review
exports.getAllReviews = async (req, res) => {
    try {
        const reviews = await Review.find().populate("userId kamarId");
        res.status(200).json({ data: reviews });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// GET: Mendapatkan review berdasarkan kamar
exports.getReviewsByKamar = async (req, res) => {
    const { kamarId } = req.params;

    try {
        const reviews = await Review.find({ kamarId }).populate("userId");
        if (!reviews.length) {
            return res.status(404).json({ message: "Belum ada review untuk kamar ini" });
        }

        res.status(200).json({ data: reviews });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// DELETE: Menghapus review berdasarkan ID
exports.deleteReview = async (req, res) => {
    const { id } = req.params;

    try {
        const review = await Review.findByIdAndDelete(id);
        if (!review) {
            return res.status(404).json({ message: "Review tidak ditemukan" });
        }

        res.status(200).json({ message: "Review berhasil dihapus" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// GET: Filter review berdasarkan rating
exports.getReviewsByRating = async (req, res) => {
    const { rating } = req.params;

    // Pastikan rating adalah angka valid antara 1 dan 5
    if (isNaN(rating) || rating < 1 || rating > 5) {
        return res.status(400).json({ message: "Rating tidak valid. Harus antara 1 hingga 5" });
    }

    try {
        const reviews = await Review.find({ rating }).populate("userId kamarId");
        if (reviews.length === 0) {
            return res.status(404).json({ message: `Tidak ada review dengan rating ${rating}` });
        }

        res.status(200).json({ data: reviews });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// GET: Filter review berdasarkan waktu terbaru
exports.getReviewsByTime = async (req, res) => {
    const { date } = req.params;

    // Pastikan tanggal valid
    const searchDate = new Date(date);
    if (isNaN(searchDate.getTime())) {
        return res.status(400).json({ message: "Tanggal tidak valid. Format yang benar adalah YYYY-MM-DD." });
    }

    try {
        // Tentukan rentang waktu dari awal hingga akhir hari
        const startOfDay = new Date(searchDate.setHours(0, 0, 0, 0));
        const endOfDay = new Date(searchDate.setHours(23, 59, 59, 999));

        // Cari review yang dibuat di antara rentang waktu tersebut
        const reviews = await Review.find({
            createdAt: { $gte: startOfDay, $lte: endOfDay }
        })
            .populate("userId kamarId")
            .sort({ createdAt: -1 }); // Urutkan dari yang terbaru

        // Jika tidak ada review yang ditemukan
        if (reviews.length === 0) {
            return res.status(404).json({ message: `Tidak ada review pada tanggal ${date}` });
        }

        // Jika review ditemukan, kirimkan respons dengan data
        res.status(200).json({ data: reviews });
    } catch (error) {
        // Menangani error dari query ke database
        res.status(500).json({ message: "Terjadi kesalahan ketika mengambil data review", error: error.message });
    }
};