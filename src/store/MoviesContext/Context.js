/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import MovieContext from '.';
import API_ENDPOINT from '../../globals/ApiEndpoint';
import mapMovies from '../../util/mapMovies';
import MoviesContextHandler from './Handler';

const MoviesContextProvider = (props) => {
  const [movies, setMovies] = useState({
    title: '',
    data: [],
  });
  const { mapMovie, newData } = mapMovies;
  const [getNowPlaying, getUpcoming] = MoviesContextHandler();
  const getNowPlayingMoviesHandler = async (title, category) => {
    const nowPlayingMovies = await getNowPlaying(API_ENDPOINT.NOW_PLAYING);
    const dataMovie = nowPlayingMovies.results.map((movie) => mapMovie(movie));
    const newDataMovies = newData(dataMovie, title, category);
    setMovies(newDataMovies);
    console.log('now');
  };
  const getUpcomingMoviesHandler = async (title, category) => {
    const upcomingMovies = await getUpcoming(API_ENDPOINT.UPCOMING);
    const dataMovie = upcomingMovies.results.map((movie) => mapMovie(movie));
    const newDataMovies = newData(dataMovie, title, category);
    setMovies(newDataMovies);
    console.log('up');
  };
  const cleanUp = () => {
    setMovies({
      title: '',
      data: [],
    });
    console.log('clean');
  };
  return (
    <MovieContext.Provider value={{
      movies,
      getNowPlayingMovies: getNowPlayingMoviesHandler,
      getUpcomingMovies: getUpcomingMoviesHandler,
      cleanUp,
    }}
    >
      {props.children}
    </MovieContext.Provider>
  );
};

export default MoviesContextProvider;
