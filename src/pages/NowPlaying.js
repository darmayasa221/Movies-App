import React, { useContext, useEffect } from 'react';
import Movies from '../components/Movies/Movies';
import MovieContext from '../store/MoviesContext';

const NowPlaying = () => {
  const { getNowPlayingMovies, cleanUp } = useContext(MovieContext);
  useEffect(() => {
    getNowPlayingMovies({ title: 'Now Playing In Cinema' });
    return (() => {
      cleanUp();
    });
  }, []);
  return <Movies />;
};

export default NowPlaying;
