import { UPDATE_INPUT_FIELD } from '../actions/actionTypes';

const initialState = {
  pokemonName: ''
};

export function pokemonNameReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_INPUT_FIELD:
      return {
        pokemonName: action.pokemonName
      };

    default:
      return state;
  }
}