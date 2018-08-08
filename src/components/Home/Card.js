import React from 'react';

 const Card = (props) => {
  const pokemonType = (type) => {
      const typeObject = {
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
      return typeObject[type];
    }

  // store pokemon data to local Storage
  const handleClick = (pokemonArray) => {
    let myMap = new Map();
    myMap.set(pokemonArray[0], [pokemonArray[1], pokemonArray[2], pokemonArray[3]])
    myMap.forEach((val, key) => {
      localStorage.setItem(key, val);
      console.log(localStorage.getItem(1));
    });
  }

    return (
    <div style={{margin: '1em'}} className="bg-dark p-4">
      <img className="hvr-bob" width="180" src={props.spriteImgUrl} alt=""/>
      <div style={{display: 'inline-block', marginLeft: 10}}>
        <div style={{fontSize: '1.25em', fontWeight: 'bold'}}>
        {props.name}
        </div>
        <div>Pokedex ID: {props.id}</div>
        <div style={pokemonType([props.type]) ? {background: pokemonType([props.type])} : {background: '#68a090'}}
        className="rounded d-flex justify-content-center mt-2">
        Type: {props.type}</div>
        <button onClick={() => handleClick([props.id, props.spriteImgUrl, props.name, props.type])} type="button" className="btn btn-primary mt-3">Add to list</button>
      </div>
      </div>
  )
}

export default Card;