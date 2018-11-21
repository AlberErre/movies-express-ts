import * as express from 'express';
import * as morgan from 'morgan';
import * as moviesRouter from './src/api/movies';

const port = 3001;
const app = express();

app.use(morgan('combined'));
app.use(express.json());

app.use('/movies', moviesRouter);

app.get('/', (req: express.Request, res: express.Response) => {
  console.log('Welcome');
  res.json({ 
    author: 'Alber Erre',
    message: 'Hey there! - glad to see your over here',
    movies: 'add /movies to your url to get all movies'
  });
});

app.listen(port, () => {
    console.log(`Ready! Express running on port ${port}.`);
});
