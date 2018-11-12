const express = require("express");
const app = express();
const port = 3001;

// this allows express to get body info for POST requests
app.use(express.json());

// API
const moviesRouter = require("./api/movies");
app.use("/movies", moviesRouter);

// Listen
app.listen(port, () => {
    console.log("Express running on port 3001.");
});
