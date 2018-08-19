import React, { Component } from 'react';
import Axios from 'axios';

export default class Form extends Component {
  state = {
    pokemonName: '',
    formClasses: "form-control col-12",
    errorMessage: "Opps! Please spell pokemon name correctly!"
  }
  handleSubmit = (event) => {
    event.preventDefault();

    const url = `https://pokeapi.co/api/v2/pokemon/${this.state.pokemonName.toLocaleLowerCase()}/`;

    Axios.get(url)
      .then(res => {
        console.log(res.data);
        this.props.onSubmit(res.data);
        this.setState({pokemonName: '', formClasses: "form-control col-12"});
      }).catch(error => {
        if(error.request && this.state.pokemonName === '') {
            this.setState(prevState => ({
              formClasses: "is-invalid " + prevState.formClasses,
              errorMessage: "Please enter a Pokemon's name!"
            }))
            console.log(error);
          } else {
            this.setState(prevState => ({
              formClasses: "is-invalid " + prevState.formClasses,
              errorMessage: "Opps! Please spell pokemon name correctly!"
            }))
            console.log(error);
          }
        }
      );
    }

  render () {
    return (
      <form onSubmit={this.handleSubmit} className="d-flex align-items-center px-5" noValidate>
        <div className="input-group row pt-4 pb-3 mt-5 my-row align-items-center">
            <input className={this.state.formClasses} type="text" placeholder="Pokemon name or ID" value={this.state.pokemonName}
            onChange={(event) => this.setState({ pokemonName: event.target.value})} required/>
          <div className={"input-group-append"}>
            <button className="form-control btn btn-danger" type="submit">Submit</button>
          </div>
          <div className="invalid-feedback" style={{fontSize:'20px'}}>
              <strong>{this.state.errorMessage}</strong>
            </div>
          </div>
      </form>
    )
  }
}