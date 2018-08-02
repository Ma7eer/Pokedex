import React, { Component } from 'react';

import '../App.css';
import Form from './Form.js';
import CardList from './CardList.js';

class Home extends Component {

  constructor() {
    super();
    this.state = {
      data: [
        {
          spriteImgUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
          id: "1",
          name: "bulbasaur",
          type: "poison"
        },
        {
          spriteImgUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
          id: "4",
          name: "charmander",
          type: "fire"
        },
        {
          spriteImgUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
          id: "7",
          name: "squirtle",
          type: "water"
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
      spriteImgUrl: apiResponse.sprites.front_shiny,
      type: apiResponse.types[0].type.name
    };
  }

  render() {
    return (
        <div>
          <div className="container my-container">
            <h1 className="mt-4">Pokedex</h1>
          </div>

          <div className="container my-container">
            <Form onSubmit={this.addNewPokemon}/>
            <CardList data={this.state.data}/>
          </div>
        </div>
    )
  }
}

export default Home;