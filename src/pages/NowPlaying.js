import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router';
import Detail from '../components/Movies/Detail';
import Movies from '../components/Movies/Movies';
import MovieContext from '../store/MoviesContext';

const NowPlaying = () => {
  const { movieId } = useParams();
  const { getNowPlayingMovies, cleanUp } = useContext(MovieContext);
  useEffect(() => {
    getNowPlayingMovies(
      { title: 'Now Playing In Cinema' },
      { category: 'now-playing' },
    );
    return () => {
      cleanUp();
    };
  }, []);
  return !movieId ? <Movies /> : <Detail movieId={movieId} />;
};

export default NowPlaying;
