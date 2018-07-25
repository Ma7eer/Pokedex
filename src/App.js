import React, { Component } from 'react';

import './App.css';
import Form from './form/Form.js';
import CardList from './card-list/CardList.js';

class App extends Component {
  state = {
    data: [
      {
        img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
        id: "1",
        name: "bulbasaur"
      },
      {
        img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/500.png",
        id: "500",
        name: "emboar"
      }
    ]
  }

  render() {
    return (
        <div>
          <div className="container my-container">
            <h1 className="mt-4">Pokedex</h1>
          </div>

          <div className="container my-container">
            <Form />
            <CardList data={this.state.data}/>
          </div>
        </div>


    )
  }
}

export default App;