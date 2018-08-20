import React, { Component } from 'react';
import Axios from 'axios';
import PropTypes from 'prop-types';
import toastr from 'toastr';
import { connect } from 'react-redux';

class Form extends Component {
  // state = {
  //   pokemonName: ''
  // }
  handleChange = (event) => {
    return this.props.dispatch({type: event.target.value});
  }
  handleSubmit = (event) => {
    event.preventDefault();

    const url = `https://pokeapi.co/api/v2/pokemon/${this.props.pokemonName.toLocaleLowerCase()}/`;

    Axios.get(url)
      .then(res => {
        // console.log(res.data);
        this.props.onSubmit(res.data);
        toastr.success("Yay! new Pokemon");
        this.setState({pokemonName: ''});
      }).catch(error => {
        if(error.request && this.props.pokemonName === '') {
          toastr.warning("Please enter a Pokemon's name!");
            console.log(error);
          } else {
            toastr.error("Opps! Please spell pokemon name correctly!");
            console.log(error);
          }
        }
      );
    }

  render () {
    return (
      <form onSubmit={this.handleSubmit} className="d-flex align-items-center px-5" noValidate>
        <div className="input-group row pt-4 pb-3 mt-5 my-row align-items-center">
            <input className="form-control col-12" type="text" placeholder="Pokemon name or ID" value={this.props.pokemonName}
            onChange={this.handleChange} required/>
          <div className={"input-group-append"}>
            <button className="form-control btn btn-danger" type="submit">Submit</button>
          </div>
        </div>
      </form>
    )
  }
}

Form.propTypes = {
  onSubmit: PropTypes.func,
  pokemonName: PropTypes.string
}

function mapStateToProps(state) {
  return {
    pokemonName: state.pokemonName
  };
}

export default connect(mapStateToProps)(Form);