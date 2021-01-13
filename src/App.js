// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
import './App.scss';
import Navbar from './components/Navbar/Navbar'
import TourList from './components/TourList'

function App() {

  return (
    <React.Fragment>
      <Navbar />
      <TourList />
    </React.Fragment>
  );
}

export default App;
