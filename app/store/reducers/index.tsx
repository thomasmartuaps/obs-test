import { combineReducers } from "redux";
import type { UserAction, PokemonAction } from "../actions";

interface PokemonState {
  name: string;
  id: number;
  counter: number;
  toggle: boolean;
  loading: boolean;
}

const initState: PokemonState = {
  name: "",
  id: 0,
  counter: 0,
  toggle: false,
  loading: false,
};

export function pokemonReducer(state = initState, action: PokemonAction) {
  const { type, payload } = action;
  switch (type) {
    case "FETCH_POKEMON_API":
      return {
        ...state,
        loading: true,
      };
    case "SET_POKEMON":
      return {
        ...state,
        name: payload.name,
        id: payload.id,
        loading: false,
      };
    default: {
      return state;
    }
  }
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}

interface UsersState {
  users: Array<User>;
}

const initUsersState: UsersState = {
  users: [],
};

export function jobslightReducer(state = initUsersState, action: UserAction) {
  const { type, payload } = action;
  switch (type) {
    case "FETCH_USERS":
      return {
        ...state,
      };
    case "SET_USERS":
      return {
        ...state,
        users: payload.users,
      };
    default:
      return state;
  }
}

export const rootReducer = combineReducers({
  pokemon: pokemonReducer,
  users: jobslightReducer,
});
