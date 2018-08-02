import React from 'react';

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
        <button type="button" className="btn btn-primary mt-4">Add to list</button>
      </div>
      </div>
  )
}

export default Card