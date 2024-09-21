paymentRoutes = require('express').Router();
const { createPayment, getAllPayment, getPaymentById, updatePayment, deletePayment } = require('../controllers/paymentControllers')

paymentRoutes.post("/", createPayment);
paymentRoutes.get("/", getAllPayment);
paymentRoutes.get("/:paymentId", getPaymentById);
paymentRoutes.put("/:paymentId", updatePayment);
paymentRoutes.delete("/:paymentId", deletePayment);

module.exports = paymentRoutes;