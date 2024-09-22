const reviewRouter = require("express").Router();
const { createReview, getAllReviews, getReviewsByKamar, deleteReview } = require("../controllers/reviewControllers");

reviewRouter.post("/", createReview);
reviewRouter.get("/", getAllReviews);
reviewRouter.get("/kamar/:kamarId", getReviewsByKamar);
reviewRouter.delete("/:id", deleteReview);

module.exports = reviewRouter;