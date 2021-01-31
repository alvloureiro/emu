import {put, call, takeEvery, all, fork} from 'redux-saga/effects';
import {
  ActionTypes,
  actionCreators,
  UserGetAccountInfo,
  UserGetPurchases,
  UserGetPurchaseResume,
  UserGeneralAccountInfo,
} from '../actions';
import {
  getUserAccountInfo,
  getUserPurchases,
  getUserPurchasesResume,
  getGeneralUserAccountInfo,
} from '../api';

function* getUserAccountInfoSaga(action: UserGetAccountInfo) {
  try {
    console.log('getUserAccountinfo saga', action);
    const {user} = action.payload;
    yield put(actionCreators.appShowLoading());
    const accountInfo = yield call(getUserAccountInfo, user);
    yield put(actionCreators.appHideLoading());
    yield put(actionCreators.userGetAccountInfoDidSucces(accountInfo));
  } catch (error) {
    yield put(actionCreators.appHideLoading());
    yield put(actionCreators.userAccountInfoDidFail(error.message));
  }
}

function* getUserPurchasesSaga(action: UserGetPurchases) {
  try {
    console.log('getUserPurchasesSaga', action);
    const {user} = action.payload;
    yield put(actionCreators.appShowLoading());
    const purchases = yield call(getUserPurchases, user);
    yield put(actionCreators.appHideLoading());
    yield put(actionCreators.userGetPurchasesDidSuccess(purchases));
  } catch (error) {
    yield put(actionCreators.appHideLoading());
    yield put(actionCreators.userGetPurchasesDidFail(error.message));
  }
}

function* getUserPurchaseResumeSaga(action: UserGetPurchaseResume) {
  try {
    console.log('getUserPurchasesResumeSage', action);
    const {user} = action.payload;
    yield put(actionCreators.appShowLoading());
    const purchasesResume = yield call(getUserPurchasesResume, user);
    yield put(actionCreators.appHideLoading());
    yield put(actionCreators.userGetPurchasesResumeDidSuccess(purchasesResume));
  } catch (error) {
    yield put(actionCreators.appHideLoading());
    yield put(actionCreators.userGetPurchasesResumeDidFail(error.message));
  }
}

function* getGeneralUserAccountInfoSaga(action: UserGeneralAccountInfo) {
  try {
    console.log('getGeneralUserAccountInfoSaga', action);
    const {user} = action.payload;
    yield put(actionCreators.appShowLoading());
    const generalInfo = yield call(getGeneralUserAccountInfo, user);
    yield put(actionCreators.appHideLoading());
    yield put(
      actionCreators.userGetGeneralUserAccountInfoDidSuccess(generalInfo),
    );
  } catch (error) {
    yield put(actionCreators.appHideLoading());
    yield put(
      actionCreators.userGetGeneralUserAccountInfoDidFail(error.message),
    );
  }
}

function* watchUserGetAccountInfo() {
  yield takeEvery(ActionTypes.USER_GET_ACCOUNT_INFO, getUserAccountInfoSaga);
}

function* watchUserGetPurchases() {
  yield takeEvery(ActionTypes.USER_GET_PURCHASES, getUserPurchasesSaga);
}

function* watchUserGetPurchaseResume() {
  yield takeEvery(
    ActionTypes.USER_GET_PURCHASES_RESUME,
    getUserPurchaseResumeSaga,
  );
}

function* watchGetGeneralUserAccountInfo() {
  yield takeEvery(
    ActionTypes.USER_GET_GENERAL_ACCOUNT_INFO,
    getGeneralUserAccountInfoSaga,
  );
}

export default function* () {
  yield all([
    fork(watchUserGetAccountInfo),
    fork(watchUserGetPurchases),
    fork(watchUserGetPurchaseResume),
    fork(watchGetGeneralUserAccountInfo),
  ]);
}
