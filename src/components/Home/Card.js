import React, { Component } from 'react';

export default class Card extends Component {
  state = {
      typeObject: {
        'normal': '#a8a878', 'fire': '#f08030',
        'fighting': '#c03028', 'water': '#6890f0',
        'flying': '#a890f0', 'grass': '#78c850',
        'poison': '#a040a0', 'electric': '#f8d030',
        'ground': '#e0c068', 'psychic': '#f85888',
        'rock': '#b8a038', 'ice': '#98d8d8',
        'bug': '#a8b820', 'dragon': '#7038f8',
        'ghost': '#705898', 'dark': '#705848',
        'steel': '#b8b8d0', 'fairy': '#ee99ac'
      }
    }

  // store pokemon data to local Storage
  handleClick (pokemonArray) {
    let myMap = new Map();
    myMap.set(pokemonArray[0], [pokemonArray[1], pokemonArray[2], pokemonArray[3]])
    myMap.forEach((val, key) => {
      localStorage.setItem(key, val);
      console.log(localStorage.getItem(1));
    });
  }

  render () {
    return (
    <div style={{margin: '1em'}} className="bg-dark p-4">
      <img className="hvr-bob" width="180" src={this.props.spriteImgUrl} alt=""/>
      <div style={{display: 'inline-block', marginLeft: 10}}>
        <div style={{fontSize: '1.25em', fontWeight: 'bold'}}>
        {this.props.name}
        </div>
        <div>Pokedex ID: {this.props.id}</div>
        <div style={this.state.typeObject[this.props.type] ? {background: this.state.typeObject[this.props.type]} : {background: '#68a090'}} 
        className="rounded d-flex justify-content-center mt-2">
        Type: {this.props.type}</div>
        <button onClick={() => this.handleClick([this.props.id, this.props.spriteImgUrl, this.props.name, this.props.type])} type="button" className="btn btn-primary mt-3">Add to list</button>
      </div>
      </div>
  )
}
}