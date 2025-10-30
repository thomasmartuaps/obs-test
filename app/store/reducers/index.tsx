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
  isLoading: boolean;
  currentUser: User | null;
}

const initUsersState: UsersState = {
  users: [],
  isLoading: false,
  currentUser: null,
};

export function jobslightReducer(state = initUsersState, action: UserAction) {
  const { type, payload } = action;
  switch (type) {
    case "FETCH_USERS":
      return {
        ...state,
        isLoading: true,
      };
    case "SET_LOADING":
      return {
        ...state,
        isLoading: payload.isLoading,
      };
    case "SET_USER_DETAIL":
      return {
        ...state,
        currentUser: payload.user,
        isLoading: false,
      };
    case "SET_USERS":
      console.log(state.isLoading, "CHECK ISLOADING FROM REDUCER");
      return {
        ...state,
        users: payload.users,
        isLoading: false,
      };
    default:
      return state;
  }
}

export const rootReducer = combineReducers({
  pokemon: pokemonReducer,
  users: jobslightReducer,
});
