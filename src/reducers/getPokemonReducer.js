import * as Types from '../actions/actionTypes';

const initialState = [{
    spriteImgUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    id: 1,
    name: "bulbasaur",
    type: "poison"
  },
  {
    spriteImgUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    id: 4,
    name: "charmander",
    type: "fire"
  },
  {
    spriteImgUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
    id: 7,
    name: "squirtle",
    type: "water"
  }
];

let dataArray = [];
function copyState() {
  for (let i =0; i < initialState.length; i++) {
    dataArray[i] = initialState[i];
  }
}

// dataArray = initialState.slice(0); // copy our initial state

export function ajaxCallHasError(state = false, action) {
  switch (action.type) {
      case Types.AJAX_CALL_HAS_ERROR:
          return action.hasError;
      default:
          return state;
  }
}
export function ajaxCallIsLoading(state = false, action) {
  switch (action.type) {
      case Types.AJAX_CALL_IS_LOADING:
          return action.isLoading;
      default:
          return state;
  }
}
copyState();
export function pokemonData(state = initialState, action) {
    switch (action.type) {
      case Types.FETCH_POKEMON_DATA_SUCCESS:
          return state.concat(action.data);
      default:
          return state;
  }
}