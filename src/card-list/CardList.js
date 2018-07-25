import React from 'react';
import Card from '../card/Card';

const CardList = (props) => {
  return (
    <div className="d-flex flex-wrap mt-4 align-items-center">
      {props.data.map((card, index) => <Card img={card.img} name={card.name} id={card.id} key={index}/>)}
    </div>
  )
}

export default CardList