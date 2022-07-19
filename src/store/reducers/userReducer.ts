import { IPokemonState, PokemonAction, PokemonActionTypes } from '../../types/pokemon';

const initialState: IPokemonState = {
  pokemons: [],
  loading: false,
  error: null,
  url: '',
  count: 0,
};

export const userReducer = (state = initialState, action: PokemonAction): IPokemonState => {
  switch (action.type) {
    case PokemonActionTypes.FETCH_POKEMONS:
      return {
        ...state,
        loading: true,
        error: null,
        pokemons: [],
      };
    case PokemonActionTypes.FETCH_POKEMONS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        pokemons: action.payload.results,
        count: action.payload.count,
      };
    case PokemonActionTypes.FETCH_POKEMONS_ERROR:
      return {
        ...state,
        loading: true,
        error: action.payload,
        pokemons: [],
      };
    case PokemonActionTypes.SET_POKEMON_URL: {
      return {
        ...state,
        loading: false,
        url: action.payload,
        error: null,
      };
    }
    case PokemonActionTypes.GET_PAGE_POKEMONS: {
      return {
        ...state,
        loading: false,
        pokemons: action.payload,
        error: null,
      };
    }

    default:
      return state;
  }
};
