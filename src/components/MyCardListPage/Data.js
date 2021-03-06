import React, { Component } from 'react';
import Card from '../common/Card';

class Data extends Component {
    state = {
      pokemonCard: 'has data'
    }

  render() {
    let myArr =[],
    id, url, name, type;

    for(let i = 0; i < localStorage.length;i++) {
      if(localStorage.key(i)) {
        id = parseInt(localStorage.key(i), 10); // id should be a number
        url = localStorage.getItem(id).split(',')[0];
        name = localStorage.getItem(id).split(',')[1];
        type = localStorage.getItem(id).split(',')[2];
        myArr.push([id, url, name, type]);
      }
  }
    return (
        <div>
          {
            myArr.map((val, i) =>
              <div key ={val[0]}>
                <Card
                  id={val[0]}
                  spriteImgUrl={val[1]}
                  name={val[2]}
                  type={val[3]}
                />
              </div>
           )
          }
      </div>
  )
}
}

export default Data;