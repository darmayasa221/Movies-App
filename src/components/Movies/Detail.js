/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import MovieContext from '../../store/MoviesContext';
import Content from '../UI/Content';
import classes from './Detail.Module.css';

const Detail = (props) => {
  const { movies } = useContext(MovieContext);
  const { movieId } = props;
  const { data, title } = movies;
  const movie = data.find((item) => (item.id === Number(movieId)));
  console.log(movie);
  return movie ? (
    <Content classes={classes.Movie}>
      <h2 className={classes.Movie_Title}>{movie.title}</h2>
      <img
        className={classes.Movie_Poster}
        src={movie.poster_path}
        alt={movie.title}
      />
      <div className={classes.Movie_Info}>
        <h3>Information</h3>
        <h4>Category</h4>
        <p>{title}</p>
        <h4>Tagline</h4>
        <p>{movie.tagline}</p>
        <h4>Release Date</h4>
        <p>{movie.release_date}</p>
        <h4>Duration</h4>
        <p>{movie.runtime}</p>
        <h4>Rating</h4>
        <p>{movie.vote_average}</p>
      </div>
      <div className={classes.Movie_Overview}>
        <h3>Overview</h3>
        <p>{movie.overview}</p>
      </div>
    </Content>
  ) : (
    <p>loading...</p>
  );
};

export default Detail;
