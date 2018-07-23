import React from 'react';
import Card from '../card/Card';

const CardList = (props) => {
  return (
    <div>
      {props.data.map(card => <Card {...card} />)}
    </div>
  )
}

export default CardList