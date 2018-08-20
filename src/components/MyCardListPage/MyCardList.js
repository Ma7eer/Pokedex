import React, { Component } from 'react';
import Data from './Data';
class MyCardList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      storedData: localStorage.length > 0 ? 'render data' : ''
    }
  }
  handleClick = () => {
    localStorage.clear();
    this.setState({storedData: ''})
    console.log(localStorage);
  }
  render() {
    return (
      <div>
        <h1>This is my pokemon list!</h1>
        { this.state.storedData !== '' ? (<Data />) : <h2>No data</h2> }
        <button onClick={() => this.handleClick()}>Clear all</button>
      </div>
    )
  }
}

export default  MyCardList;