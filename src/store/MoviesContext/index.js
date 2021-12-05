import { createContext } from 'react';

const MovieContext = createContext({
  movies: [],
  getNowPlayingMovies: () => {},
  getUpcomingMovies: () => {},
  cleanUp: () => {},
});

export default MovieContext;
