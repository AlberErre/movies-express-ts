const express = require("express");
const router = express.Router();
const _ = require("lodash");

// Utils
const bodyIsEmpty = require("../../utils/bodyIsEmpty");
//const Movie = require("../../models/movie.model");
const idExists = require("../../utils/idExists");

// Movies Data
let movies = require("./data/movies");

router.get("/", (req, res) => {
    res.json(movies);
});

router.get("/:id", (req, res) => {
    movies.find(selectedMovie => {
        if (selectedMovie.id == req.params.id) {
            res.json(selectedMovie);
        }
    });

    res.status(400).send(
        `Oops, ID: ${req.params.id} hasn't have any movie assigned.`
    );
});

router.post("/", (req, res) => {
    if (!bodyIsEmpty(req.body)) {
        res.status(400).send("Oops, you have to pass something as Body");
    } else {
        const newMovie = req.body;
        newMovie.id = _.random(0, 100);
        movies.push(newMovie);
        //let newMovie = new Movie(_.random(0,100), ........);

        res.json({
            message: "New Movie added!",
            newMovie
        });
    }
});

router.put("/:id", (req, res) => {
    const newInfo = req.body;
    let movieID = req.params.id;
    let MovieToUpdate = movies.find(movie => movie.id == movieID);

    res.json({
        message: `Movie ${MovieToUpdate.id} has been updated.`,
        MovieToUpdate
    });
});

router.delete("/movies/:id", (req, res) => {
    if (!idExists(movies, req.params.id)) {
        res.status(400).send("Oops, that ID does not exist.");
    } else {
        movies.find(movieToDelete => {
            if (movieToDelete.id == req.params.id) {
                // remove from movies array (using lodash)
                _.pull(movies, movieToDelete);
                res.send(`Movie ${movieToDelete.id} has been deleted.`);
            }
        });
    }
});

module.exports = router;
