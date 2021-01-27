import {ActionTypes} from '../types';
import {AppAction} from '../AppActions';
import {Retailer} from '../payloads';

export const appShowLoading = (): AppAction => {
  return {
    type: ActionTypes.APP_SHOW_LOADING,
  };
};

export const appHideLoading = (): AppAction => {
  return {
    type: ActionTypes.APP_HIDE_LOADING,
  };
};

export const appDidOccurError = (error: string): AppAction => {
  return {
    type: ActionTypes.APP_DID_OCCUR_ERROR,
    error,
  };
};

export const appGetPartners = (): AppAction => {
  return {
    type: ActionTypes.APP_GET_PARTNERS,
  };
};

export const appGetPartnersDidFail = (error: string): AppAction => {
  return {
    type: ActionTypes.APP_GET_PARTNERS_DID_FAIL,
    payload: {
      error,
    },
  };
};

export const appGetPartnersDidSuccess = (partners: Retailer[]): AppAction => {
  return {
    type: ActionTypes.APP_GET_PARTNERS_DID_SUCCESS,
    payload: {
      partners,
    },
  };
};

export const appGetPartnersDetail = (id: number): AppAction => {
  return {
    type: ActionTypes.APP_GET_PARTNER_DETAIL,
    payload: {
      id,
    },
  };
};

export const appGetPartnerDetailsDidSuccess = (partner: Retailer) => {
  return {
    type: ActionTypes.APP_GET_PARTNER_DETAIL_DID_SUCCESS,
    payload: {
      partner,
    },
  };
};

export const appGetPartnerDetailsDidFail = (error: string) => {
  return {
    type: ActionTypes.APP_GET_PARTNER_DETAIL_DID_FAIL,
    payload: {
      error,
    },
  };
};
