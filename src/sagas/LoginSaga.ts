import {put, call, takeEvery, all, fork} from 'redux-saga/effects';
import {ActionTypes, LoginDidAttempt, actionCreators} from '../actions';
import {doLogin} from '../api';

function* doLoginSaga(action: LoginDidAttempt) {
  try {
    console.log('saga login', action);
    yield put(actionCreators.AppShowLoading());
    const result = yield call(doLogin, action.payload);
    yield put(actionCreators.AppHideLoading());
    yield put(actionCreators.loginDidSucces(result));
  } catch (error) {
    yield put(actionCreators.AppHideLoading());
    yield put(actionCreators.loginDidFail(error.message));
  }
}

function* watchOnLoginDidAttempt() {
  yield takeEvery(ActionTypes.LOGIN_DID_ATTEMPT, doLoginSaga);
}

export default function* () {
  yield all([fork(watchOnLoginDidAttempt)]);
}
