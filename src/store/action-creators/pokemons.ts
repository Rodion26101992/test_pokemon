import { PokemonAction, PokemonActionTypes } from '../../types/pokemon';
import { Dispatch } from 'redux';
import axios from 'axios';

export const fetchUsers = () => {
  return async (dispatch: Dispatch<PokemonAction>) => {
    try {
      dispatch({ type: PokemonActionTypes.FETCH_POKEMONS });
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon/');
      dispatch({ type: PokemonActionTypes.FETCH_POKEMONS_SUCCESS, payload: response.data });
    } catch (e) {
      dispatch({
        type: PokemonActionTypes.FETCH_POKEMONS_ERROR,
        payload: 'error',
      });
    }
  };
};

export const setUrlPokemon = (url: string) => {
  return async (dispatch: Dispatch<PokemonAction>) => {
    try {
      dispatch({ type: PokemonActionTypes.SET_POKEMON_URL, payload: url });
    } catch (e) {
      dispatch({
        type: PokemonActionTypes.FETCH_POKEMONS_ERROR,
        payload: 'error',
      });
    }
  };
};

export const getInfoPokemon = (url: string) => {
  return async (dispatch: Dispatch<PokemonAction>) => {
    try {
      dispatch({ type: PokemonActionTypes.GET_PAGE_POKEMONS, url });
    } catch (e) {
      dispatch({
        type: PokemonActionTypes.FETCH_POKEMONS_ERROR,
        payload: 'error',
      });
    }
  };
};
