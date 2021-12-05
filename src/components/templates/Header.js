/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-unused-expressions */
import React, { useState } from 'react';
import NavBar from '../NavBar/NavBar';
import HumbergerToggel from '../UI/HumbergerToggel';
import classes from './Header.Module.css';

const Header = () => {
  const [mode, setMode] = useState(false);
  const showMenuHandler = () => {
    mode === true ? setMode(false) : setMode(true);
  };
  return (
    <header className={classes.AppBar}>
      <HumbergerToggel
        onClick={showMenuHandler}
        mode={mode}
        classes={classes.AppBar_Menu}
      />
      <div className={classes.AppBar_Brand}>
        <h1>Movie Catalogue</h1>
      </div>
      <NavBar classes={mode === true ? `${classes.AppBar_Navigation} ${classes.AppBar_Navigation__Open}` : classes.AppBar_Navigation} />
    </header>
  );
};

export default Header;
