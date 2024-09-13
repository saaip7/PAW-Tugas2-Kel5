const User = require("../models/UserModels");

exports.createUser = async (req, res) => {
  const { name, email, phone } = req.body;

  const user = new User({
    name,
    email,
    phone
  });
  user
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
      });
    });
};

exports.readUser = async (req, res) => {
  User.find()
    .then((users) => {
      res.status(200).json({
        data: users
      });
    })
    .catch((err) => {
      res.status(400).json({
        error: err
      });
    });
};

exports.updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, email, phone } = req.body;

  User.findByIdAndUpdate(id, { name, email, phone })
    .then(() => {
      res.status(200).json({
        message: "User updated successfully!"
      });
    })
    .catch((err) => {
      res.status(400).json({
        error: err
      });
    });
};

exports.deleteUser = async (req, res) => {
  const { id } = req.params;

  User.findByIdAndDelete(id)
    .then(() => {
      res.status(200).json({
        message: "User deleted successfully!"
      });
    })
    .catch((err) => {
      res.status(400).json({
        error: err
      });
    });
};