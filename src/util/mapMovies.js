/* eslint-disable no-prototype-builtins */
import CONFIG from '../globals/Config';

const newData = (data, { title }, { category }) => {
  const Data = {
    category,
    title,
    data,
  };
  return Data;
};

const mapMovie = (movie) => {
  const newDataMovie = movie;
  if (movie.hasOwnProperty('backdrop_path')) {
    const newBackdropPath = `${CONFIG.BASE_IMAGE_URL}${movie.backdrop_path}`;
    const newPosterPath = `${CONFIG.BASE_IMAGE_URL}${movie.poster_path}`;
    newDataMovie.backdrop_path = newBackdropPath;
    newDataMovie.poster_path = newPosterPath;
  }
  return newDataMovie;
};
const mapMovies = { mapMovie, newData };

export default mapMovies;
