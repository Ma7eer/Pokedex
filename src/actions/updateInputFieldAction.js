import { UPDATE_INPUT_FIELD } from './actionTypes';

export function updateInputField(pokemonName) {
  return {
    type: UPDATE_INPUT_FIELD,
    pokemonName
  }
}