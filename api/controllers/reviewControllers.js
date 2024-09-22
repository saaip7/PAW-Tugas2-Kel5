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