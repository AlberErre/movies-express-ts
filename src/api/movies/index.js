const express = require("express");
const _ = require("lodash");
const router = express.Router();
const magic = require("./whereMagicHappens");

router.get("/", (req, res) => magic.getMovies(req, res));
router.get("/:id", (req, res) => magic.getMovie(req, res));
router.post("/", (req, res) => magic.addMovie(req, res));
router.put("/:id", (req, res) => magic.updateMovie(req, res));
router.delete("/movies/:id", (req, res) => magic.deleteMovie(req, res));

module.exports = router;
