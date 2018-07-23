import React, { Component } from 'react';

import './App.css';
import Form from './form/Form.js';
import CardList from './card-list/CardList.js';

class App extends Component {

  constructor() {
    super();
    this.state = {
      data: [
        {
          spriteImgUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
          id: "1",
          name: "bulbasaur"
        },
        {
          spriteImgUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/500.png",
          id: "500",
          name: "emboar"
        }
      ]
    };
  }

  addNewPokemon = (pokemonInfo) => {
    let mappedPokemonInfo = this.transformApiData(pokemonInfo);

    this.setState(prevState => ({
      data: prevState.data.concat(mappedPokemonInfo)
    }));
  };

  // TODO: This could be moved to somewhere more API specific.
  transformApiData(apiResponse) {
    return {
      name: apiResponse.name,
      id: apiResponse.id,
      spriteImgUrl: apiResponse.sprites.front_shiny
    };
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.addNewPokemon}/>
        <CardList data={this.state.data}/>
      </div>
    )
  }
}

export default App;