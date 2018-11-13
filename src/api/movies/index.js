const express = require("express");
const router = express.Router();
const controller = require("./controllers");

router.get("/", (req, res) => {
    let movies = controller.getMovies();
    res.json(movies);
});

router.get("/:id", (req, res) => {
    let movieById = controller.getMovieById(req.params.id);

    if (movieById !== undefined) {
        res.json(movieById);
    } else {
        res.status(400).send(
            `Sorry, there is no movie assigned to this id (${req.params.id}). Try another one.`
        );
    }
});

router.post("/", (req, res) => {
    let newMovie = controller.addMovie(req.body);

    if (newMovie === false) {
        res.status(400).send({
            message: "Oops, an error has ocurred while adding new movie.",
        });
    } else {
        res.json({
            message: "New Movie added!",
            newMovie
        });
    }
});



router.put("/:id", (req, res) => controller.updateMovie(req, res));
router.delete("/:id", (req, res) => controller.deleteMovie(req, res));

router.get("/like/:id", (req, res) => controller.getLikes(req, res));
router.put("/like/:id", (req, res) => controller.likeMovie(req, res));
router.delete("/like/:id", (req, res) => controller.dislikeMovie(req, res));

module.exports = router;
