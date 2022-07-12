import { IPokemonState, PokemonAction, PokemonActionTypes } from '../../types/pokemon';

const initialState: IPokemonState = {
  pokemons: [],
  loading: false,
  error: null,
  url: '',
};

export const userReducer = (state = initialState, action: PokemonAction): IPokemonState => {
  switch (action.type) {
    case PokemonActionTypes.FETCH_POKEMONS:
      return { loading: true, error: null, pokemons: [] };
    case PokemonActionTypes.FETCH_POKEMONS_SUCCESS:
      return { loading: false, error: null, pokemons: action.payload };
    case PokemonActionTypes.FETCH_POKEMONS_ERROR:
      return { loading: true, error: action.payload, pokemons: [] };
    case PokemonActionTypes.SET_POKEMON_URL:
      return { loading: true, url: action.payload, error: null };
    default:
      return state;
  }
};
