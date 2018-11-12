const express = require("express");
const app = express();
const port = 3001;
const moviesRouter = require("./api/movies");

// this allows express to get body info for POST requests
app.use(express.json());

app.use("/movies", moviesRouter);

app.listen(port, () => {
    console.log(`Express running on port ${port}.`);
});
