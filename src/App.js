import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';
import Routes from './routes/Routes';
import Header from './components/Header';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Routes />
        </div>
      </BrowserRouter>
    );
  }
}