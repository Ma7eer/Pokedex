import React from 'react';

const Card = (props) => {
  return (
      <div className="card px-5 mx-4 text-white bg-dark mb-3" style={{width: '15rem'}}>
        <img className="card-img-top" alt="pokemon sprite" src={props.img} />
        <div className="card-body">
          <div>{props.id}</div>
          <div>{props.name}</div>
        </div>
      </div>
  )
}

export default Card