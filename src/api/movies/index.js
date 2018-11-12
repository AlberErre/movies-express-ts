const express = require("express");
const router = express.Router();
const controller = require("./controllers");

router.get("/", (req, res) => controller.getMovies(req, res));
router.get("/:id", (req, res) => controller.getMovie(req, res));
router.post("/", (req, res) => controller.addMovie(req, res));
router.put("/:id", (req, res) => controller.updateMovie(req, res));
router.delete("/:id", (req, res) => controller.deleteMovie(req, res));

router.get("/like/:id", (req, res) => controller.getLikes(req, res));
router.put("/like/:id", (req, res) => controller.likeMovie(req, res));
router.delete("/like/:id", (req, res) => controller.dislikeMovie(req, res));

module.exports = router;
