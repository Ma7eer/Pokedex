import { UPDATE_INPUT_FIELD } from '../actions/actionTypes';

const initialState = {
  pokemonName: ''
};

export default function pokemonNameReducer(state = initialState.pokemonName, action) {
  switch (action.type) {
    case UPDATE_INPUT_FIELD:
      return action.pokemonName;

    default:
      return state;
  }
}