/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = (props) => {
  return (
    <nav className={props.classes}>
      <ul>
        <li>
          <NavLink to="/now-playing">Now Playing</NavLink>
        </li>
        <li>
          <NavLink to="/upcoming">Upcoming</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
