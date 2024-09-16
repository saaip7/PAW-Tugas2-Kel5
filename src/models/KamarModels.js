const mongoose = require("mongoose");

const KamarSchema = new mongoose.Schema({
  roomType: { type: String, required: true }, // misalnya: single, double, suite
  nomorKamar: { type: String, required: true }, // Nomor kamar
  pricePerNight: { type: Number, required: true }, // Harga per malam
  availability: { type: Boolean, default: true }, // Status ketersediaan
  numberOfBeds: { type: Number, required: true }, // Jumlah tempat tidur
  description: { type: String }, // Deskripsi kamar
  maxOccupancy: { type: Number, required: true } // Jumlah maksimum orang yang bisa menginap di kamar
}, { timestamps: true });

module.exports = mongoose.model("Kamar", KamarSchema);
