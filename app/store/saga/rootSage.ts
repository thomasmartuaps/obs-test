import { all, call, put, takeEvery } from "redux-saga/effects";
import { fetchUsers, fetchPokemon } from "../../api";
import type { UserAction, PokemonAction } from "../actions";
import type { User } from "../reducers";

function* fetchDitto(action: PokemonAction) {
  const res: {
    id: number;
    name: string;
    order: number;
  } = yield call(fetchPokemon, action.payload.name);

  yield put({
    type: "SET_POKEMON",
    payload: {
      name: res.name,
      id: res.id,
    },
  });
}

function* fetchUsersSaga(action: UserAction) {
  const res: User = yield call(fetchUsers);
  yield put({
    type: "SET_USERS",
    payload: {
      users: res,
    },
  });
}

function* dittoSagaWatcher() {
  yield all([takeEvery("FETCH_POKEMON_API", fetchDitto)]);
}

function* jobsSagaWatcher() {
  yield all([takeEvery("FETCH_USERS", fetchUsersSaga)]);
}

function* rootSaga() {
  yield all([dittoSagaWatcher(), jobsSagaWatcher()]);
}

export default rootSaga;
