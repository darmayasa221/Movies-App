import React, { useContext, useEffect } from 'react';
import Movies from '../components/Movies/Movies';
import MovieContext from '../store/MoviesContext';

const Upcoming = () => {
  const { getUpcomingMovies, cleanUp } = useContext(MovieContext);
  useEffect(() => {
    getUpcomingMovies({ title: 'Up Coming In Cinema' });
    return (() => {
      cleanUp();
    });
  }, []);
  return <Movies />;
};

export default Upcoming;
