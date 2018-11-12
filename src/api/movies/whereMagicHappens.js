// Movies Data
let movies = require("../../data/movies");

function getMovies() {
    res.json(movies);
}

function getMovie() {}

function updateMovie() {}

function deleteMovie() {}

module.exports = { getMovie, getMovies, updateMovie, deleteMovie };
