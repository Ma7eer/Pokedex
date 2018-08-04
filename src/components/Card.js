import React from 'react';

// insert the array of items created into our local storage
// localStorage.setItem('items', JSON.stringify(itemsArray));
// const data = JSON.parse(localStorage.getItem('items'));

const handleClick = (pokemonArray) => {
  /* create an array that will either be an empty array or
  will be all the items listed in our local storage from a previous session */
  let localStorageArray = localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')) : [];

  localStorageArray.push.apply(localStorageArray, pokemonArray); // pushes data received from our card into our itemsArray

  localStorage.setItem('data', JSON.stringify(localStorageArray)); // adds that data from card into the local storage
  // console.log(localStorage);

  // Map method
  let myMap = new Map();
  myMap.set(pokemonArray[0], [pokemonArray[1], pokemonArray[2], pokemonArray[3]])
  myMap.forEach((val, key) => {
    localStorage.setItem(key, val);
    console.log(localStorage);
  });
}

const Card = (props) => {

  return (
    <div style={{margin: '1em'}} className="bg-dark p-4">
      <img className="hvr-bob" width="180" src={props.spriteImgUrl} alt=""/>
      <div style={{display: 'inline-block', marginLeft: 10}}>
        <div style={{fontSize: '1.25em', fontWeight: 'bold'}}>
        {props.name}
        </div>
        <div>Pokedex ID: {props.id}</div>
        <div>Type: {props.type}</div>
        <button onClick={() => handleClick([props.id, props.spriteImgUrl, props.name, props.type])} type="button" className="btn btn-primary mt-4">Add to list</button>
      </div>
      </div>
  )
}

export default Card