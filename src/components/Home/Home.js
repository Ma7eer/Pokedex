import React, { Component } from 'react';

import '../../App.css';
import Form from './Form';
import CardList from './CardList';
import transformApiData from '../api/api.js';

export default class Home extends Component {

  state = {
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

  addNewPokemon = (pokemonInfo) => {
    let mappedPokemonInfo = transformApiData(pokemonInfo);

    this.setState(prevState => ({
      data: prevState.data.concat(mappedPokemonInfo)
    }));
  };

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