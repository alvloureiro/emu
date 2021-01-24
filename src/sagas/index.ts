import {all, fork} from 'redux-saga/effects';
import Login from './LoginSaga';

export default function* rootSaga() {
  yield all([fork(Login)]);
}
