const express = require("express");
const router = express.Router();  
router.use(express.json());

// Depend on what models
const tes = require("../models/tesmodels");

router.post("/", async (req, res) => {
  const newTes = new tes({
    name: req.body.name,
    quantity: req.body.quantity,
    price: req.body.price,
  });

  try {
    const savedTes = await newTes.save();
    res.status(201).json(savedTes); // 201 means successfully created a new object
  } catch (err) {
    res.status(400).json({ message: err.message }); // 400 means there's an error in the user input
  }
});

module.exports = router; 
