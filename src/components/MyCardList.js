import React, { Component } from 'react';

const Data = () => {
  let localData = localStorage.getItem('data').replace(/\[/, '').replace(/\]/, '').split(','); //.slice(1)
  return (
    // for data in localStorage print on each h2 one item
    <div>
      {localData.map( (data, i) =>
        <h2 key={i} >{data}</h2>
      )}
    </div>
  )
}

class MyCardList extends Component {
  constructor() {
    super();
    this.state = {
      storedData: localStorage.getItem('data')
    }
  }
  handleClick = () => {
    localStorage.clear();
    this.setState({ storedData: ''})
    console.log(localStorage);
  }
  render() {
    return (
      <div>
        <h1>This is my pokemon list!</h1>
        { this.state.storedData ? (<Data />) : <h2>No data</h2> }
        <button onClick={() => this.handleClick()}>Clear local storage</button>
      </div>
    )
  }
}

export default MyCardList;