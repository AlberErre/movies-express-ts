import { bodyIsNotEmpty } from '../../utils/bodyIsNotEmpty';
import { movies } from '../../data/movies';
import { pull } from 'lodash';
import { Movie } from '../../models/model';

export function getMovies(): Movie[] {
  return movies;
}

function findMovieById(idToSearch: string) {
  return movies.find(movie => movie.id === idToSearch);
}

export function addMovie(newMovie: Movie) {
  // if (bodyIsNotEmpty(newMovie)) {
  //   newMovie.id = `${ movies.length + 1 }`;
  //   movies.push(newMovie);
  //   return newMovie;
  // } else {
  //   return false;
  // }
  movies.push(newMovie);
}

function updateMovie(id, movieToUpdate) {
  if (bodyIsNotEmpty(movieToUpdate)) {
    const moviePosition = movies.findIndex(movie => movie.id === id);
    if (moviePosition >= 0) {
      movies[moviePosition] = movieToUpdate;
      return movies[moviePosition];
    }
  } else {
    return false;
  }
}

function deleteMovie(idToRemove: string) {
  const movieToDelete = findMovieById(idToRemove);
  if (movieToDelete) {
    pull(movies, movieToDelete);
  }

  // if (idExists(movies, idToRemove)) {
  //
  // }
  // if (!idExists(movies, idToRemove)) {
  //     return false;
  // } else {
  //     let movieToDelete = movies.find(movie => movie.idToRemove === idToRemove);

  //     return true;
  // }
}

function getLikes() : Movie[] {
  return movies.filter(movie => movie.like === true);
}

function likeMovie(id) {
  if (!findMovieById(id)) {
    return false;
  } else {
    const likedMovie = movies.find(movie => movie.id === id);
    likedMovie.like = true;
    return true;
  }
}

function dislikeMovie(id) {
  if (!findMovieById(id)) {
    return false;
  } else {
    const dislikedMovie = movies.find(movie => movie.id === id);
    dislikedMovie.like = false;
    return true;
  }
}

export function bodyToMovie(body): Movie {
  // TODO
  if (body.name > 10) {
    return undefined;
  } else {
  return {
    name: 'asd'
    asd
    asd
    asd
    asd
    sad
    sad
    asdas
    d
  };

}
  // if (body.year > 1000) {
  //   movie.setName();
  // }
  // return movie;
  // return null;
  // throw new Error('Tarea para casa!!');
}
