import {put, call, takeEvery, all, fork} from 'redux-saga/effects';
import {ActionTypes, LoginDidAttempt, actionCreators} from '../actions';
import {doLogin} from '../api';
import * as RootNavigation from '../navigation';

function* doLoginSaga(action: LoginDidAttempt) {
  try {
    console.log('saga login', action);
    const {data: credentials} = action.payload;
    yield put(actionCreators.appShowLoading());
    const result = yield call(doLogin, credentials);
    console.log('LOGIN SAGA', result);
    yield put(actionCreators.appHideLoading());
    yield put(actionCreators.loginDidSucces(result));
    RootNavigation.navigate('Home', {});
  } catch (error) {
    yield put(actionCreators.appHideLoading());
    yield put(actionCreators.loginDidFail(error.message));
  }
}

function* watchOnLoginDidAttempt() {
  yield takeEvery(ActionTypes.LOGIN_DID_ATTEMPT, doLoginSaga);
}

export default function* () {
  yield all([fork(watchOnLoginDidAttempt)]);
}
