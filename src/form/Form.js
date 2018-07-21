import React, { Component } from 'react';

export default class Form extends Component {
  state = {
    pokemonName: ''
  }
  handleSubmit = (event) => {
    event.preventDefault();
    // console.log("Pokemon data!!", this.state.pokemonName);

    const url = `https://pokeapi.co/api/v2/pokemon/${this.state.pokemonName}/`;

    // http request using fetch
    fetch( url,
    {method: 'GET', mode: 'no-cors'})
      .then((res) => {
         return console.log(res);
      })
      // .then((resJson) => {
      //   console.log(resJson);
      //   return;
      // })


  }
  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Pokemon" value={this.state.pokemonName}
        onChange={(event) => this.setState({ pokemonName: event.target.value})} required/>
        <button type="submit">Who's that pokemon?</button>
      </form>
    )
  }
}