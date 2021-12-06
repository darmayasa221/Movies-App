import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Fragment } from 'react/cjs/react.production.min';
import './App.css';
import Footer from './components/templates/Footer';
import Header from './components/templates/Header';
import NowPlaying from './pages/NowPlaying';
import Upcoming from './pages/Upcoming';

const App = () => {
  return (
    <Fragment>
      <Header />
      <main>
        <Routes>
          <Route path="/now-playing" element={<NowPlaying />} exact />
          <Route path="/now-playing/:movieId" element={<NowPlaying />} />
          <Route path="/upcoming" element={<Upcoming />} exact />
          <Route path="/upcoming/:movieId" element={<Upcoming />} exact />
        </Routes>
      </main>
      <Footer />
    </Fragment>
  );
};
export default App;
