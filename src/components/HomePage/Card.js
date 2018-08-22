import React from 'react';
import { pokemonType } from './pokemonType';
import PropTypes from 'prop-types';
import toastr from 'toastr';
import CardButton from './CardButton';

const Card = (props) => {
   // props
  const { spriteImgUrl, name, id, type } = props;

  // store pokemon data to local Storage
  const handleClick = (pokemonArray) => {
    let myMap = new Map();
    myMap.set(pokemonArray[0], [pokemonArray[1], pokemonArray[2], pokemonArray[3]])
    myMap.forEach((val, key) => {
      localStorage.setItem(key, val);
      console.log(localStorage.getItem(1));
    });
    toastr.info('pokemon added to your list :]');
  }

  return (
    <div style={{margin: '1em'}} className="bg-dark p-4">
      <img className="hvr-bob" width="180" src={spriteImgUrl} alt=""/>
      <div style={{display: 'inline-block', marginLeft: 10}}>
        <div style={{fontSize: '1.25em', fontWeight: 'bold'}}>
        {name}
        </div>
        <div>Pokedex ID: {id}</div>
        <div style={pokemonType([type]) ? {background: pokemonType([type])} : {background: '#68a090'}}
        className="rounded d-flex justify-content-center mt-2">
        Type: {type}</div>
        <CardButton onClick={() => handleClick([id, spriteImgUrl, name, type])}/>
      </div>
    </div>
  )
}

Card.propTypes = {
  spriteImgUrl: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.number,
  type: PropTypes.string
}

export default Card;