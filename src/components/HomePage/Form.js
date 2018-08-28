import React, { Component } from 'react';
import Axios from 'axios';
import PropTypes from 'prop-types';
import toastr from 'toastr';
import { connect } from 'react-redux';
import { updateInputField } from '../../actions/updateInputFieldAction';
import LoadingSpinner from '../common/LoadingSpinner';

class Form extends Component {
  state = {
    loading: false
  }

  handleChange = (event) => {
    return this.props.dispatch(updateInputField(event.target.value));
  }

  handleSubmit = (event) => {
    event.preventDefault();

    let userInput = this.props.pokemonName.toLocaleLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${userInput}/`;

    this.setState({loading: true}, () => {
      Axios.get(url)
      .then(res => {
        this.props.onSubmit(res.data); // return data from api
        toastr.success("Yay! new Pokemon"); // show success message
        this.props.dispatch(updateInputField('')); // dispatch change to redux store
        this.setState({loading: false}); // remove loader
      }).catch(error => {
        if(error.request && this.props.pokemonName === '') {
          toastr.warning("Please enter a Pokemon's name!"); // show warning message
            // console.log(error);
            this.setState({loading: false});
          } else {
            toastr.error("Opps! Please spell pokemon name correctly!"); // show error message
            // console.log(error);
            this.setState({loading: false});
          }
        }
      );
    })

    }

  render () {
    return (
      <form onSubmit={this.handleSubmit} className="d-flex align-items-center px-5" noValidate>
        <div className="input-group row pt-4 pb-3 mt-5 my-row align-items-center">
            <input className="form-control col-12" type="text" placeholder="Pokemon name or ID" value={this.props.pokemonName}
            onChange={this.handleChange} required/>
          <div className={"input-group-append"}>
            <button className="form-control btn btn-danger" type="submit">{this.state.loading ? <LoadingSpinner />: <span>Submit</span>}</button>
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