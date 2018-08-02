import React, { Component } from 'react';

import './App.css';
import Routes from './routes/Routes.js';
import Header from './components/Header.js';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Routes />
      </div>
    );
  }
}

export default App;