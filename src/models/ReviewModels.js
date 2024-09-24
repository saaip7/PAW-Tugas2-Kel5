const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    kamarId: { type: mongoose.Schema.Types.ObjectId, ref: "Kamar", required: true },
    rating: { type: Number, required: true, min: 1, max: 5 }, // Rating antara 1 hingga 5
    comment: { type: String, required: true }, // Komentar dari user
}, { timestamps: true });

module.exports = mongoose.model("Review", ReviewSchema);


