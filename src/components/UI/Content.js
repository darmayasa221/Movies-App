/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import classes from './Content.Module.css';

const Content = (props) => {
  return (
    <div className={`${classes.Content}  ${props.classes ? props.classes : ''}`}> {props.children} </div>
  );
};

export default Content;
