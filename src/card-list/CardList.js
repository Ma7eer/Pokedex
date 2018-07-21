import React from 'react';
import Card from '../card/Card';

const CardList = (props) => {
  return (
    <div>
      {props.data.map((card) => <Card img={card.img} name={card.name} id={card.id}/>)}
    </div>
  )
}

export default CardList