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
          return movies[moviePosition];
        }
    } else {
        return false;
    }
}

function deleteMovie(id) {
    if (!idExists(movies, id)) {
        return false;
    } else {
        let movieToDelete = movies.find(movie => movie.id === id);
        _.pull(movies, movieToDelete);
        return true;
    }
}

function getLikes() {
    return movies.filter(movie => movie.like === true);
}

function likeMovie(id) {
    if (!idExists(movies, id)) {
        return false;
    } else {
        let likedMovie = movies.find(movie => movie.id === id);
        likedMovie.like = true;
        return true;
    }
}

function dislikeMovie(id) {
    if (!idExists(movies, id)) {
        return false;
    } else {
        let dislikedMovie = movies.find(movie => movie.id === id);
        dislikedMovie.like = false;
        return true;
    }
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
