import type { User } from "../reducers";

export type UserAction =
  | {
      type: "FETCH_USERS";
      payload: {
        query: string;
      };
    }
  | {
      type: "SET_USER_DETAIL";
      payload: {
        user: User;
      };
    }
  | {
      type: "SET_LOADING";
      payload: {
        isLoading: boolean;
      };
    }
  | {
      type: "EDIT_USER";
      payload: {
        user: User;
      };
    }
  | {
      type: "ADD_USER";
      payload: {
        user: User;
      };
    }
  | {
      type: "DELETE_USER";
      payload: {
        id: number;
      };
    }
  | {
      type: "SET_USERS";
      payload: {
        users: Array<User>;
      };
    };
