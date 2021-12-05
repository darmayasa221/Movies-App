/* eslint-disable react/prop-types */
import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Movie.Module.css';

const Movie = (props) => {
  const { movie } = props;
  return (
    <div className={classes.MovieItem}>
      <div className={classes.MovieItem_Header}>
        <img src={movie.backdrop_path} alt={movie.title} />
        <div className={classes.MovieItem_Header__Rating}>
          <p>
            ⭐️
            <span className={classes.MovieItem_Header__Rating__Score}>
              {movie.vote_average}
            </span>
          </p>
        </div>
      </div>
      <div className={classes.MovieItem_Content}>
        <h3>
          <NavLink to="#">{movie.title}</NavLink>
        </h3>
        <p>{movie.overview}</p>
      </div>
    </div>
  );
};

export default Movie;
