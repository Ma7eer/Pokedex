import React from 'react';

const Card = (props) => {
  return (
    <div>
      <img alt="pokemon spite" src={props.img} />
      <div>
        <div>{props.id}</div>
        <div>{props.name}</div>
      </div>
    </div>
  )
}

export default Card