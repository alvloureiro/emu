import {ActionTypes} from './types';
import {Retailer} from './payloads';

interface AppShowLoading {
  type: ActionTypes.APP_SHOW_LOADING;
}

interface AppHideLoading {
  type: ActionTypes.APP_HIDE_LOADING;
}

interface AppDidOccurError {
  type: ActionTypes.APP_DID_OCCUR_ERROR;
  error: string;
}

export interface AppGetPartners {
  type: ActionTypes.APP_GET_PARTNERS;
}
export interface AppGetPartnersDidSuccess {
  type: ActionTypes.APP_GET_PARTNERS_DID_SUCCESS;
  payload: {partners: Retailer[]};
}

export interface AppGetPartnersDidFail {
  type: ActionTypes.APP_GET_PARTNERS_DID_FAIL;
  payload: {error: string};
}

export interface AppGetPartnerDetail {
  type: ActionTypes.APP_GET_PARTNER_DETAIL;
  payload: {
    id: number;
  };
}

export interface AppGetPartnerDetailDidSuccess {
  type: ActionTypes.APP_GET_PARTNER_DETAIL_DID_SUCCESS;
  payload: {
    partner: Retailer;
  };
}

export interface AppGetPartnerDetailDidFail {
  type: ActionTypes.APP_GET_PARTNER_DETAIL_DID_FAIL;
  payload: {
    error: string;
  };
}
export type AppAction =
  | AppShowLoading
  | AppHideLoading
  | AppDidOccurError
  | AppGetPartners
  | AppGetPartnersDidSuccess
  | AppGetPartnersDidFail
  | AppGetPartnerDetail
  | AppGetPartnerDetailDidSuccess
  | AppGetPartnerDetailDidFail;
