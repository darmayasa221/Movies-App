import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import MoviesContextProvider from './store/MoviesContext/Context';

ReactDOM.render(
  <MoviesContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </MoviesContextProvider>,
  document.getElementById('root'),
);
