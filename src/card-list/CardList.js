import React from 'react';
import Card from '../card/Card';

const CardList = (props) => {
  return (
    <div className="d-flex flex-wrap mt-4 align-items-center">
      {props.data.map(card => <Card {...card} />)}
    </div>
  )
}

export default CardList