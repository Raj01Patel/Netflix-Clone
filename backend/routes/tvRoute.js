const express = require("express");
const tvController = require("../controllers/tvController")
const router = express.Router();

router.get("/trending", tvController.getTrendingTv);
router.get("/:id/trailers", tvController.getTvTrailers);
router.get("/:id/details", tvController.getTvDetails);
router.get("/:id/similar", tvController.getSimilarTvs);
router.get("/:category", tvController.getTvsByCategory);

module.exports = router;