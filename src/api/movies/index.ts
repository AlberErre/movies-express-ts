import * as express from 'express';
import { deleteMovie, getLikes, getMovie, getMovies, newMovie, setLikeMovie, updateMovie } from "./controller";

const router = express.Router();

router.get('/like', (req, res) => {
  res.json(getLikes());
});

router.get('/:id', (req, res) => {
  res.json(getMovie(req.params.id));
});

router.get('/', (req, res) => {
  res.json(getMovies());
});

router.post('/', (req, res) => {
  const movie = req.body;
  newMovie(movie, (err, movies) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.json(movies);
    }
  });
});

router.put('/', (req, res) => {
  updateMovie(req.body, (err, movies) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.json(movies);
    }
  });
});

router.delete('/:id', (req, res) => {
  deleteMovie(req.params.id, (err, movies) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.json(movies);
    }
  });
});

router.post('/like/:id', (req, res) => {
  setLikeMovie(req.params.id, true, (err, movies) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.json(movies);
    }
  });
});

router.delete('/like/:id', (req, res) => {
  setLikeMovie(req.params.id, false, (err, movies) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.json(movies);
    }
  });
});

export = router;
