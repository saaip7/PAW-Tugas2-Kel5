kamarRouter = require("express").Router();
const {createKamar, getAllKamar, getKamarByNomorKamar: getKamarByNomorKamar, updateKamar, deleteKamar} = require("../controllers/kamarControllers");

// Mendapatkan semua kamar
kamarRouter.get("/", getAllKamar);

// Mendapatkan kamar berdasarkan nomor kamar
kamarRouter.get("/:nomorKamar", getKamarByNomorKamar);

// Membuat kamar baru
kamarRouter.post("/create", createKamar);

// Mengupdate kamar berdasarkan ID
kamarRouter.put("/update/:id", updateKamar);

// Menghapus kamar berdasarkan ID
kamarRouter.delete("/:delete/id", deleteKamar);

module.exports = kamarRouter;
