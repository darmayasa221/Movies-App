import React from 'react';
import Content from '../UI/Content';
import classes from './Detail.Module.css';

const Detail = () => {
  return (
    <Content>
      <h2 classes={classes.Movie__Title}>
        test
      </h2>
      <img className={classes.Movie__Poster} alt="test" />
      <div className={classes.Movie__info}>
        <h3>Information</h3>
        {/* loop */}
        <h4>Tagline</h4>
        <p>tag</p>
        {/* end loop */}
      </div>
    </Content>
  );
};

export default Detail;
