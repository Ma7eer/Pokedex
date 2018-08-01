import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './App.css';
import Home from './Home/Home.js';
import MyCardList from './my-card-list/myCardList';

class App extends Component {
  render() {
    return (
        <div>
          <Router>
            <div>
              <Route exact path="/" component={Home}/>
              <Route path="/mycardlist" component={MyCardList}/>
            </div>
          </Router>
        </div>
    )
  }
}

export default App;