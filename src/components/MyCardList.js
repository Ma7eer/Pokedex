import React from 'react';
import MyCard from './MyCard.js';

const MyCardList = (props) => {
  return (
    <div>
      <h1>This is my pokemon list!</h1>
      <h2>{localStorage.getItem('items').split()}</h2>
      <MyCard />
    </div>
  )
}

export default MyCardList;