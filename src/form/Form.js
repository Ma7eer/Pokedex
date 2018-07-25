import React, { Component } from 'react';

export default class Form extends Component {
  state = {
    pokemonName: ''
  }
  handleSubmit = (event) => {
    event.preventDefault();

    const url = `https://pokeapi.co/api/v2/pokemon/${this.state.pokemonName}/`;

    // http request using fetch
    fetch( url,
    {method: 'GET', mode: 'no-cors', headers: {
      'content-type': 'application/json', redirect: 'follow'
  }})
      .then((res) => { // data already a javaScript object so no need to parse
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })


  }
  render () {
    return (
      <form onSubmit={this.handleSubmit} className="d-flex align-items-center px-5">
        <div className="input-group row pt-4 pb-3 mt-5 my-row align-items-center">
            <input className="form-control col-12" type="text" placeholder="Pokemon" value={this.state.pokemonName}
            onChange={(event) => this.setState({ pokemonName: event.target.value})} required/>
          <div className="input-group-append">
            <button className="form-control btn btn-danger" type="submit">Submit</button>
          </div>
          </div>
      </form>
    )
  }
}