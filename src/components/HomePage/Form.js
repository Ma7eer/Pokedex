import React, { Component } from 'react';
// import Axios from 'axios';
import PropTypes from 'prop-types';
import toastr from 'toastr';
import { connect } from 'react-redux';
import { updateInputField } from '../../actions/updateInputFieldAction';
import { ajaxCallIsLoading } from '../../actions/loadPokemonAction';
import LoadingSpinner from '../common/LoadingSpinner';

class Form extends Component {
  state = {
    loading: false
  }

  handleChange = (event) => {
    return this.props.getUserInput(event.target.value);
  }

  handleSubmit = (event) => {
    event.preventDefault();

    let userInput = this.props.pokemonName.toLocaleLowerCase();
    let url = `https://pokeapi.co/api/v2/pokemon/${userInput}/`;


    if(this.props.pokemonName === '') {
      toastr.warning("Please enter a Pokemon's name!"); // show warning message
      return;
    }

      this.props.onSubmit(url);
    }

  render () {
    const { pokemonName } = this.props;
    return (
      <form onSubmit={this.handleSubmit} className="d-flex align-items-center px-5" noValidate>
        <div className="input-group row pt-4 pb-3 mt-5 my-row align-items-center">
            <input className="form-control col-12" type="text" placeholder="Pokemon name or ID" value={pokemonName}
            onChange={this.handleChange} required/>
          <div className={"input-group-append"}>
            <button className="form-control btn btn-danger" type="submit">{this.props.loading ? <LoadingSpinner />: <span>Submit</span>}</button>
          </div>
        </div>
      </form>
    )
  }
}

Form.propTypes = {
  onSubmit: PropTypes.func,
  pokemonName: PropTypes.string,
  getUserInput: PropTypes.func,
  fetchPokemonData: PropTypes.func
}

function mapStateToProps(state) {
  return {
    pokemonName: state.pokemonName,
    loading: state.ajaxCallIsLoading
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getUserInput: (input) => dispatch(updateInputField(input)),
    showLoader: (bool) => dispatch(ajaxCallIsLoading(bool))
};
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);