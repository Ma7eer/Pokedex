import React from 'react';

const Card = (props) => {
  return (
    <div style={{margin: '1em'}}>
      <img width="75" src={props.spriteImgUrl}/>
      <div style={{display: 'inline-block', marginLeft: 10}}>
        <div style={{fontSize: '1.25em', fontWeight: 'bold'}}>
        {props.name}
        </div>
        <div>Pokedex ID: {props.id}</div>
      </div>
    </div>
  )
}

export default Card