import pokemonName from './pokemonNameReducer';
import {ajaxCallHasError, ajaxCallIsLoading, pokemonData } from './getPokemonReducer';
import { combineReducers } from 'redux';

export default combineReducers({
  pokemonName,
  ajaxCallHasError,
  ajaxCallIsLoading,
  pokemonData
});