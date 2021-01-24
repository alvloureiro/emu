import {put, call, takeEvery, all, fork} from 'redux-saga/effects';
import {
  ActionTypes,
  AppShowLoading,
  AppHideLoading,
  LoginDidAttempt,
  loginDidSucces,
  loginDidFail,
} from '../actions';
import {doLogin} from '../api';

function* doLoginSaga(action: LoginDidAttempt) {
  try {
    yield put(AppShowLoading());
    const result = yield call(doLogin, action.payload);
    yield put(AppHideLoading());
    yield put(loginDidSucces(result));
  } catch (error) {
    yield put(AppHideLoading());
    yield put(loginDidFail(error.message));
  }
}

function* watchOnLoginDidAttempt() {
  yield takeEvery(ActionTypes.LOGIN_DID_ATTEMPT, doLoginSaga);
}

export default function* () {
  yield all([fork(watchOnLoginDidAttempt)]);
}
