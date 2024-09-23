const reviewRouter = require("express").Router();
const { createReview, getAllReviews, getReviewsByKamar, deleteReview, getReviewsByRating, getReviewsByTime } = require("../controllers/reviewControllers");

reviewRouter.post("/", createReview);
reviewRouter.get("/", getAllReviews);
reviewRouter.get("/kamar/:kamarId", getReviewsByKamar);
reviewRouter.delete("/:id", deleteReview);
reviewRouter.get("/rating", getReviewsByRating);
reviewRouter.get("/time", getReviewsByTime);

module.exports = reviewRouter;
