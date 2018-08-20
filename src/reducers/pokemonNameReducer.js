const initialState = {
  pokemonName: ''
};

export function reducer(state = initialState, action) {
  if(!action.type.includes('redux')) {
    return {
      pokemonName: action.type
    };
  }
  return state;
}