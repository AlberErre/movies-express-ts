const express = require("express");
const _ = require("lodash");
const router = express.Router();
const magic = require(".whereMagicHappens");

router.get("/", (req, res) => magic.getMovies);
router.get("/:id", (req, res) => magic.getMovie);
router.post("/", (req, res) => magic.addMovie);
router.put("/:id", (req, res) => magic.updateMovie);
router.delete("/movies/:id", (req, res) => magic.deleteMovie);

module.exports = router;
