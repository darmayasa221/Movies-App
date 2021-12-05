/* eslint-disable no-prototype-builtins */
import CONFIG from '../globals/Config';

const newData = (data, { title }) => {
  const Data = {
    title,
    data,
  };
  return Data;
};

const mapMovie = (movie) => {
  const newDataMovie = movie;
  if (movie.hasOwnProperty('backdrop_path')) {
    const newPath = `${CONFIG.BASE_IMAGE_URL}${movie.backdrop_path}`;
    newDataMovie.backdrop_path = newPath;
  }
  return newDataMovie;
};
const mapMovies = { mapMovie, newData };

export default mapMovies;
