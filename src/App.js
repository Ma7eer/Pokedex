import React, { Component } from 'react';

import './App.css';
import Routes from './routes/Routes';
import Header from './components/Header/Header';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Routes />
      </div>
    );
  }
}