import React, { Component } from 'react';
import Axios from 'axios';

export default class Form extends Component {
  state = {
    pokemonName: ''
  }
  handleSubmit = (event) => {
    event.preventDefault();

    const url = `https://pokeapi.co/api/v2/pokemon/${this.state.pokemonName}/`;

    Axios.get(url)
      .then(res => {
        console.log(res.data);
        this.props.onSubmit(res.data);
        this.setState({pokemonName: ''});
      });
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