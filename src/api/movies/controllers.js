const _ = require("lodash");
const bodyIsNotEmpty = require("../../utils/bodyIsNotEmpty");
const idExists = require("../../utils/idExists");
let movies = require("../../data/movies");

function getMovies() {
    return movies;
}

function getMovieById(id) {
    return movies.find(movie => movie.id === id );
}

function addMovie(newMovie) {
    if (bodyIsNotEmpty(newMovie)) {
        newMovie.id = `${ movies.length + 1 }`;
        movies.push(newMovie);
        return newMovie;
    } else {
        return false;
    }
}

function updateMovie(id, movieToUpdate) {
    if (bodyIsNotEmpty(movieToUpdate)) {
        let moviePosition = movies.findIndex(movie => movie.id === id);
        if (moviePosition >= 0) {
          movies[moviePosition] = movieToUpdate;
        }
        return movies[moviePosition];
    } else {
        return false;
    }
}


function deleteMovie(req, res) {
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
}

function getLikes(req, res) {
    console.log(res);
    res.json(movies);
}

function likeMovie(req, res) {
    console.log(res);
    res.json(movies);
}

function dislikeMovie(req, res) {
    console.log(res);
    res.json(movies);
}

module.exports = {
    getMovies,
    getMovieById,
    addMovie,
    updateMovie,
    deleteMovie,
    getLikes,
    likeMovie,
    dislikeMovie
};
