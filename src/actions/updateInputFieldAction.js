import * as Types from './actionTypes';

export function updateInputField(pokemonName) {
  return {
    type: Types.UPDATE_INPUT_FIELD,
    pokemonName
  }
}