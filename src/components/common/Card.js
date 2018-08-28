import React from 'react';
import { pokemonType } from '../HomePage/pokemonType';
import PropTypes from 'prop-types';
import toastr from 'toastr';
import CardButton from './CardButton';

const Card = (props) => {
   // props
  const { spriteImgUrl, name, id, type } = props;

  // store pokemon data to local Storage
  const handleAddClick = (pokemonArray) => {
    let myMap = new Map();
    myMap.set(pokemonArray[0], [pokemonArray[1], pokemonArray[2], pokemonArray[3]])
    myMap.forEach((val, key) => {
      if(localStorage.getItem(key)) {
        toastr.warning(`${name} already added to your list!`);
      } else {
      localStorage.setItem(key, val);
      // console.log(localStorage.getItem(1));
      toastr.info(`${name} added to your list :]`);
    }
    });
  }

  const handleDeleteClick = (key) => {
    console.log('deleted NOT');
    localStorage.removeItem(key);
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
        <CardButton onClick={() => handleAddClick([id, spriteImgUrl, name, type])} onDelete={() => {handleDeleteClick(id)}} homePath={props.homePath} id={id}/>
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