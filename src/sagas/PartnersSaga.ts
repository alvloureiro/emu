import {put, call, takeEvery, all, fork} from 'redux-saga/effects';
import {
  actionCreators,
  ActionTypes,
  AppGetPartnerDetail,
  Partners,
  Retailer,
} from '../actions';
import {getPartners, getPartnerDetails} from '../api';

function* getPartnersSaga() {
  try {
    yield put(actionCreators.appShowLoading());
    const result: Partners = yield call(getPartners);
    yield put(actionCreators.appGetPartnersDidSuccess(result));
  } catch (error) {
    yield put(actionCreators.appHideLoading());
    yield put(actionCreators.appGetPartnersDidFail(error.message));
  }
}

function* getPartnerDetailSaga(action: AppGetPartnerDetail) {
  try {
    const {id} = action.payload;
    yield put(actionCreators.appShowLoading());
    const partner: Retailer = yield call(getPartnerDetails, id);
    yield put(actionCreators.appHideLoading());
    yield put(actionCreators.appGetPartnerDetailsDidSuccess(partner));
  } catch (error) {
    yield put(actionCreators.appHideLoading());

    yield put(actionCreators.appGetPartnerDetailsDidFail(error.message));
  }
}

function* watchGetPartners() {
  yield takeEvery(ActionTypes.APP_GET_PARTNERS, getPartnersSaga);
}

function* watchGetaPartnerDetail() {
  yield takeEvery(ActionTypes.APP_GET_PARTNER_DETAIL, getPartnerDetailSaga);
}

export default function* () {
  yield all([fork(watchGetPartners), fork(watchGetaPartnerDetail)]);
}
