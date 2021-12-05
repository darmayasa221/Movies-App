import React, { useContext, useEffect, useState } from 'react';
import Content from '../UI/Content';
import classes from './Movies.Module.css';
import Movie from './Movie';
import MovieContext from '../../store/MoviesContext';

const Movies = () => {
  const [isLoading, setIsloading] = useState(false);
  const { movies } = useContext(MovieContext);
  const { title, data } = movies;
  console.log(movies);
  useEffect(() => {
    if (data.length < 1) {
      setIsloading(false);
    } else {
      setIsloading(true);
    }
  }, [title, data]);
  return (
    <Content>
      <h2 className={classes.Content__Heading}>{title}</h2>
      <div id="movies" className={classes.Movies}>
        {!isLoading ? <p>loading...</p> : data.map((movie) => {
          return <Movie key={movie.id} movie={movie} />;
        })}
      </div>
    </Content>
  );
};

export default Movies;
