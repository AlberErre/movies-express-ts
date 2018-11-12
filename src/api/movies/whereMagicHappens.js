// Utils
const bodyIsEmpty = require("../../utils/bodyIsEmpty");
const idExists = require("../../utils/idExists");

// Movies Data
let movies = require("../../data/movies");

// Movies API Methods
function getMovies(req, res) {
    console.log(res);
    res.json(movies);
}

function getMovie(req, res) {
    movies.find(selectedMovie => {
        if (selectedMovie.id == req.params.id) {
            res.json(selectedMovie);
        }
    });

    res.status(400).send(
        `Oops, ID: ${req.params.id} hasn't have any movie assigned.`
    );
}

function addMovie(req, res) {
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
}

function updateMovie(req, res) {
    const newInfo = req.body;
    let movieID = req.params.id;
    let MovieToUpdate = movies.find(movie => movie.id == movieID);

    res.json({
        message: `Movie ${MovieToUpdate.id} has been updated.`,
        MovieToUpdate
    });
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

module.exports = { getMovie, getMovies, addMovie, updateMovie, deleteMovie };
