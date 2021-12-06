import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router';
import Detail from '../components/Movies/Detail';
import Movies from '../components/Movies/Movies';
import MovieContext from '../store/MoviesContext';

const Upcoming = () => {
  const { movieId } = useParams();
  const { getUpcomingMovies, cleanUp } = useContext(MovieContext);
  useEffect(() => {
    getUpcomingMovies(
      { title: 'Up Coming In Cinema' },
      { category: 'upcoming' },
    );
    return (() => {
      cleanUp();
    });
  }, []);
  return !movieId ? <Movies /> : <Detail movieId={movieId} />;
};

export default Upcoming;
