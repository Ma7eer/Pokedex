import * as Types from './actionTypes';
import axios from 'axios';
import toastr from 'toastr';
import { updateInputField } from './updateInputFieldAction';

export function ajaxCallHasError(bool) {
  return {
    type: Types.AJAX_CALL_HAS_ERROR,
    hasError: bool
  };
}
export function ajaxCallIsLoading(bool) {
  return {
    type: Types.AJAX_CALL_IS_LOADING,
    isLoading: bool
  };
}
export function FetchPokemonDataSuccess(info) {
  return {
    type: Types.FETCH_POKEMON_DATA_SUCCESS,
    info: {
      spriteImgUrl: info.sprites.front_shiny,
      id: info.id,
      name: info.name,
      type: info.types[0].type.name
    }
  };
}

// action creator
export function FetchPokemonData(url) {
  return (dispatch) => {
    dispatch(ajaxCallIsLoading(true));
    axios.get(url)
      .then((res) => {
        return dispatch(FetchPokemonDataSuccess(res.data));
      })
      .then(()=> {
        toastr.success("Yay! new Pokemon"); // show success message
        dispatch(ajaxCallIsLoading(false));
        return dispatch(updateInputField(''))
      })
      .catch(() => {
            dispatch(ajaxCallIsLoading(false));
            toastr.error("Opps! Please spell pokemon name correctly!"); // show error message
            return dispatch(ajaxCallHasError(true));
          }
      );
  };
}