import React, { Component } from 'react';
import PropTypes from 'prop-types';
import toastr from 'toastr';
import { pokemonType } from '../HomePage/pokemonType';
import CardButton from './CardButton';

class Card extends Component {
  state = {
    deleted: true
  }

  // store pokemon data to local Storage
  handleAddClick = (pokemonArray) => {
    let myMap = new Map();
    myMap.set(pokemonArray[0], [pokemonArray[1], pokemonArray[2], pokemonArray[3]])
    myMap.forEach((val, key) => {
      if(localStorage.getItem(key)) {
        toastr.warning(`${this.props.name} already added to your list!`);
      } else {
      localStorage.setItem(key, val);
      // console.log(localStorage.getItem(1));
      toastr.info(`${this.props.name} added to your list :]`);
    }
    });
  }

  handleDeleteClick = (key) => {
    toastr.success("You removed a pokemon from your list");
    localStorage.removeItem(key);
    this.setState({deleted: false});
  }

  render() {
    const { spriteImgUrl, name, id, type, homePath } = this.props;
    return (
      this.state.deleted ?
         <div style={{margin: '1em'}} className="bg-dark p-4">
        <img className="hvr-bob" width="180" src={spriteImgUrl} alt=""/>
        <div style={{display: 'inline-block', marginLeft: 10}}>
          <div style={{fontSize: '1.25em', fontWeight: 'bold'}}>
          {name}
          </div>
          <div>Pokedex ID: {id}</div>
          <div style={pokemonType([type]) ? {background: pokemonType([type])} : {background: '#68a090'}}
          className="rounded d-flex justify-content-center mt-2">Type: {type}</div>
          <CardButton
            onClick={() => this.handleAddClick([id, spriteImgUrl, name, type])}
            onDelete={() => {this.handleDeleteClick(id)}}
            homePath={homePath}
            id={id}/>
        </div>
      </div>
      : ''
    )
  }
}

Card.propTypes = {
  spriteImgUrl: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.number,
  type: PropTypes.string,
  homePath: PropTypes.string
}

export default Card;