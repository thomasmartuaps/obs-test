import { all, call, put, takeEvery } from "redux-saga/effects";
import { fetchUsers } from "../../api";
import type { UserAction } from "../actions";
import type { User } from "../reducers";

function* fetchUsersSaga(action: UserAction) {
  const res: User = yield call(fetchUsers);
  yield put({
    type: "SET_USERS",
    payload: {
      users: res,
    },
  });
}

function* jobsSagaWatcher() {
  yield all([takeEvery("FETCH_USERS", fetchUsersSaga)]);
}

function* rootSaga() {
  yield all([jobsSagaWatcher()]);
}

export default rootSaga;
