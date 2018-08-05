import React, { Component } from 'react';



class Data extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonCard: 'has data'
    }
  }
  handleClick = (id) => {
    localStorage.removeItem(id);
    this.setState({pokemonCard: ''})
  }

  render() {
    let myArr =[],
    id, url, name, type;

    for(let i = 0; i < localStorage.length;i++) {
      if(localStorage.key(i)) {
        id = localStorage.key(i);
        url = localStorage.getItem(id).split(',')[0];
        name = localStorage.getItem(id).split(',')[1];
        type = localStorage.getItem(id).split(',')[2];
        myArr.push([id, url, name, type]);
      }
  }
    return (
      <div>
        <div>
          {
            myArr.map((val, i) =>
              <div key ={i}>
                <div>{val[0]}</div>
                <div>{val[1]}</div>
                <div>{val[2]}</div>
                <div>{val[3]}</div>
                <button>Delete</button>
              </div>
           )
          }
      </div>
      </div>
  )
}
}

export default Data;