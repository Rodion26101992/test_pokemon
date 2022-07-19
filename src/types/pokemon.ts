export enum PokemonActionTypes {
  FETCH_POKEMONS = 'FETCH_POKEMONS',
  FETCH_POKEMONS_SUCCESS = 'FETCH_POKEMONS_SUCCESS',
  FETCH_POKEMONS_ERROR = 'FETCH_POKEMONS_ERROR',
  SET_POKEMON_URL = 'SET_POKEMON_URL',
  GET_PAGE_POKEMONS = 'GET_PAGE_POKEMONS',
}

export interface IFetchUsersAction {
  type: PokemonActionTypes.FETCH_POKEMONS;
}

export interface IFetchUsersSuccessAction {
  type: PokemonActionTypes.FETCH_POKEMONS_SUCCESS;
  payload: any[];
}

export interface IFetchUsersErrorAction {
  type: PokemonActionTypes.FETCH_POKEMONS_ERROR;
  payload: string;
}

export interface IPokemonState {
  pokemons?: any[];
  loading: boolean;
  error: null | string;
  url?: null | string;
  count?: number;
}

export interface IPokemonAction {
  type: string;
  payload?: any;
}

export interface ISetUrlAction {
  type: string;
  payload?: any;
}

export interface IGetPokemonsAction {
  type: string;
  payload?: any;
}

export type PokemonAction =
  | IFetchUsersAction
  | IFetchUsersSuccessAction
  | IFetchUsersErrorAction
  | ISetUrlAction
  | IGetPokemonsAction;
