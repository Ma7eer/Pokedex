import React, { Component } from 'react';
import Data from './Data';
class MyCardList extends Component {
    state = {
      storedData: localStorage.length > 0 ? 'render data' : ''
    }

  handleClick = () => {
    localStorage.clear();
    this.setState({storedData: ''})
    console.log(localStorage);
  }

  render() {
    return (
      <div className="container my-container">
        <h1>Scroll down to see your pokemon list!</h1>
        <div>
        { this.state.storedData !== '' ? (<Data />) : <h2>No data... Go to the home page and add some pokemon to your list!</h2> }
        </div>
        <button
          onClick={() => this.handleClick()}
          className="btn btn-danger mt-3 align-self-center">Clear all</button>
      </div>
    )
  }
}

export default  MyCardList;