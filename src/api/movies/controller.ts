import { loadMovies, saveMovies } from "../../utils/files";

let movies;
loadMovies(moviesData => movies = moviesData);

export function getLikes() {
  return movies.filter(movie => movie.like === true);
}

export function getMovie(movieId) {
  return movies.find(movie => movie.id === movieId);
}

export function getMovies() {
  return movies;
}

export function newMovie(movie, callback) {
  movie.id = `${movies.length + 1}`;
  movies.push(movie);

  saveMovies(movies, err => callback(err, movies));
}

export function updateMovie(movie, callback) {
  const movieId = movie.id;
  const moviePosition = movies.findIndex(movie => movie.id === movieId);
  if (moviePosition >= 0) {
    movies[moviePosition] = movie;
  }

  saveMovies(movies, err => callback(err, movies));
}

export function deleteMovie(movieId, callback) {
  const moviePosition = movies.findIndex(movie => movie.id === movieId);
  if (moviePosition >= 0) {
    movies.splice(moviePosition, 1);
  }

  saveMovies(movies, err => callback(err, movies));
}

export function setLikeMovie(movieId, likeValue, callback) {
  const movie = movies.find(movie => movie.id === movieId);
  if (movie) {
    movie.like = likeValue;
  }

  saveMovies(movies, err => callback(err, movies));
}
