import { readFile, writeFile } from "fs";

export function loadMovies(callback) {
  const filePath = __dirname + '/../../data/movies.json';
  readFile(filePath, (err, data) => {
    if (err) {
      callback([]);
    } else {
      callback(JSON.parse(data.toString()));
    }
  });
}

export function saveMovies(movies, callback) {
  const filePath = __dirname + '/../../data/movies.json';
  const moviesJSON = JSON.stringify(movies);
  writeFile(filePath, moviesJSON, err => {
    if (err) {
      callback(err);
    } else {
      callback();
    }
  });
}
