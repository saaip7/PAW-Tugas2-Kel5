const Kamar = require("../models/KamarModels");

// POST: Membuat kamar baru
exports.createKamar = async (req, res) => {
    const { roomType, nomorKamar, pricePerNight, availability, numberOfBeds, description, maxOccupancy } = req.body;

    const kamar = new Kamar({
      roomType,
      nomorKamar,
      pricePerNight,
      availability,
      numberOfBeds,
      description,
      maxOccupancy
    });
    kamar
    .save()
    .then(() => {
      res.status(200).json({
        message: "Kamar berhasil dibuat!",
        data: roomType, 
        data: nomorKamar
      });
    })
    .catch((err) => {
      res.status(400).json({
        error: err
      });
    });
  };

// GET: Mendapatkan semua kamar
exports.getAllKamar = async (req, res) => {
    Kamar.find()
    .then((kamar) => {
        res.status(200).json({
            data: kamar
        });
        })
    .catch((err) => {
        res.status(400).json({
            error: err
        }); 
    });
};

// GET: Mendapatkan kamar berdasarkan nomor kamar
exports.getKamarByNomorKamar = async (req, res) => {
    const { nomorKamar } = req.params;

    Kamar.findOne({ nomorKamar })
    .then((kamar) => {
        if (!kamar) {
            return res.status(404).json({
                message: "Kamar tidak ditemukan"
            });
        }
        res.status(200).json({
            data: kamar
        });
        })
    .catch((err) => {
        res.status(500).json({ message: err.message });
    });
};



// PUT: Mengupdate kamar berdasarkan ID
exports.updateKamar = async (req, res) => {
    const { id } = req.params;
    const { roomType, pricePerNight, availability, numberOfBeds, description, maxOccupancy, nomorKamar } = req.body;

    Kamar.findByIdAndUpdate(id, { roomType, nomorKamar, pricePerNight, availability, numberOfBeds, description, maxOccupancy })
    .then(() => {
        res.status(200).json({
            message: "Kamar berhasil diupdate!"
        });
    })
    .catch((err) => {
        res.status(400).json({
            error: err
        });
    });
};

// DELETE: Menghapus kamar berdasarkan ID
exports.deleteKamar = async (req, res) => {
    const { id } = req.params;

    Kamar.findByIdAndDelete(id)
    .then(() => {
        res.status(200).json({
            message: "Kamar berhasil dihapus!"
        });
    })
    .catch((err) => {
        res.status(400).json({
            error: err
        });
    });
};
