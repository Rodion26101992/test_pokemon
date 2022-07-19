import { PokemonActionTypes, PokemonAction } from './../../types/pokemon';
import { Dispatch } from 'react';
import axios from 'axios';

export const getPagePokemonsFetch = (limit: number, offset = 20) => {
  return async (dispatch: Dispatch<PokemonAction>) => {
    try {
      dispatch({ type: PokemonActionTypes.FETCH_POKEMONS });
      const response = await axios.get(
        `https://pokeapi.co/api/v2/ability/?limit=${offset}&offset=${limit * offset}`
      );
      dispatch({ type: PokemonActionTypes.GET_PAGE_POKEMONS, payload: response.data.results });
    } catch (e) {
      dispatch({
        type: PokemonActionTypes.FETCH_POKEMONS_ERROR,
        payload: 'error',
      });
    }
  };
};
