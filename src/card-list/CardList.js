import React from 'react';
import Card from '../card/Card';

const CardList = (props) => {
  return (
    <div className="d-flex flex-wrap mt-4 align-items-center justify-content-center my-card">
      {props.data.map((card, index) => <Card {...card} key={index} />)}
    </div>
  )
}

export default CardList