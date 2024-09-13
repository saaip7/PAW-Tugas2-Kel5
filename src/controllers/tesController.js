// Depend on what models
const tes = require("../models/tesmodels");

exports.tesCreate = async (req, res) => {
    const { name, quantity, price } = req.body;

    const newTes = new tes({
        name,
        quantity,
        price
    });

    newTes
    .save()
    .then(() => {
        res.status(200).json({
            message: "User created successfully!",
            data: name
          });
    })
    .catch((err) => {
        res.status(400).json({
            error: err
          })
    });
}
