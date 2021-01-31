import {all, fork} from 'redux-saga/effects';
import Login from './LoginSaga';
import User from './UserSaga';

export default function* rootSaga() {
  yield all([fork(Login), fork(User)]);
}
