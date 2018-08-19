import React, { Component } from 'react';
import Axios from 'axios';
import PropTypes from 'prop-types';
import toastr from 'toastr';

export default class Form extends Component {
  state = {
    pokemonName: ''
  }
  handleSubmit = (event) => {
    event.preventDefault();

    const url = `https://pokeapi.co/api/v2/pokemon/${this.state.pokemonName.toLocaleLowerCase()}/`;

    Axios.get(url)
      .then(res => {
        // console.log(res.data);
        this.props.onSubmit(res.data);
        toastr.success("Yay! new Pokemon");
        this.setState({pokemonName: ''});
      }).catch(error => {
        if(error.request && this.state.pokemonName === '') {
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
            <input className="form-control col-12" type="text" placeholder="Pokemon name or ID" value={this.state.pokemonName}
            onChange={(event) => this.setState({ pokemonName: event.target.value})} required/>
          <div className={"input-group-append"}>
            <button className="form-control btn btn-danger" type="submit">Submit</button>
          </div>
        </div>
      </form>
    )
  }
}

Form.propTypes = {
  onSubmit: PropTypes.func
}