kamarRouter = require("express").Router();
const {createKamar, getAllKamar, getKamarByNomorKamar: getKamarByNomorKamar, updateKamar, deleteKamar, filterKamarbyType} = require("../controllers/kamarControllers");

// Mendapatkan semua kamar
kamarRouter.get("/", getAllKamar);

// Mendapatkan kamar berdasarkan nomor kamar
kamarRouter.get("/:nomorKamar", getKamarByNomorKamar);

// Membuat kamar baru
kamarRouter.post("/", createKamar);
// Mengupdate kamar berdasarkan ID
kamarRouter.put("/:id", updateKamar);

// Menghapus kamar berdasarkan ID
kamarRouter.delete("/:id", deleteKamar);

// Filter kamar berdasarkan tipe 
kamarRouter.get("/filter/:roomType", filterKamarbyType);

module.exports = kamarRouter;
