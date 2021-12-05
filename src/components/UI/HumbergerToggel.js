/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import classes from './HumbergerToggel.Module.css';

const HumbergerToggel = (props) => {
  return (
    <div
      onClick={props.onClick}
      className={`${classes.HumburgerToggel} ${props.classes} ${props.mode === true ? classes.open : ''}`}
    >
      <span />
      <span />
      <span />
    </div>
  );
};

export default HumbergerToggel;
