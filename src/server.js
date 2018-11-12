const { app, port } = require("config/express");
//const Movie = require("models/movie.model");
const bodyIsEmpty = require("utils/bodyIsEmpty");
const idExists = require("utils/idExists");
const _ = require("lodash");

// Movies Data
const movies = require("data/movies");

// API
app.get("/", (req, res) => {
    res.json(movies);
});

// Listen
app.listen(port, () => {
    console.log("Express running on port 3001.");
});