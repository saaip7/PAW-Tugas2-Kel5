const tesRoutes = require("express").Router();

//Define first
const { tesCreate } = require("../controller/tesController");

//All the CRUD disini
tesRoutes.post("/tesCreate", tesCreate);

module.exports = tesRoutes;