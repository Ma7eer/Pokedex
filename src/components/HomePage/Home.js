import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { FetchPokemonData } from '../../actions/fetchPokemonAction';

import '../../App.css';
import Form from './Form';
import CardList from './CardList';
import Footer from '../Footer/Footer';

class Home extends Component {
  addNewPokemon = (url) => {
    this.props.fetchPokemonData(url);
  }

  render() {
    const { pokemonData } = this.props;
    return (
        <div>
          <div className="container my-container">
            <h1 className="mt-4">Pokedex</h1>
          </div>

          <div className="container my-container">
            <Form onSubmit={this.addNewPokemon} />
            <CardList data={pokemonData} />
          </div>

           <Footer />
        </div>
    )
  }
}

Home.propTypes = {
  pokemonData: PropTypes.array,
  fetchPokemonData: PropTypes.func
}

function mapStateToProps(state) {
  return {
    pokemonData: state.pokemonData
}
}

function mapDispatchToProps(dispatch) {
  return {
    fetchPokemonData: (url) => dispatch(FetchPokemonData(url))
};
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);