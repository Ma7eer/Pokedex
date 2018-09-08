import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FetchPokemonData } from '../../actions/loadPokemonAction';

import '../../App.css';
import Form from './Form';
import CardList from './CardList';
// import transformApiData from '../api/api.js';

class Home extends Component {
  addNewPokemon = (url) => {
    this.props.fetchData(url);
  }

  render() {
    return (
        <div>
          <div className="container my-container">
            <h1 className="mt-4">Pokedex</h1>
          </div>

          <div className="container my-container">
            <Form onSubmit={this.addNewPokemon} />
            <CardList data={this.props.dataArray} />
          </div>
        </div>
    )
  }
}

Home.propTypes = {
  dataArray: PropTypes.array,
  fetchData: PropTypes.func
}

function mapStateToProps(state) {
  return {
    dataArray: state.pokemonData
}
}

function mapDispatchToProps(dispatch) {
  return {
    fetchData: (url) => dispatch(FetchPokemonData(url))
};
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);