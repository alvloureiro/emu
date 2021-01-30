import {ActionTypes} from './types';
import {
  Purchase,
  UserPurchaseResume,
  UserAccountInfo,
  UserData,
} from './payloads';

export interface UserGetAccountInfo {
  type: ActionTypes.USER_GET_ACCOUNT_INFO;
  payload: {
    user: UserData;
  };
}

export interface UserGetAccountInfoDidSuccess {
  type: ActionTypes.USER_GET_ACCOUNT_INFO_DID_SUCCESS;
  payload: {
    account: UserAccountInfo;
  };
}

export interface UserGetAccountInfoDidFail {
  type: ActionTypes.USER_GET_ACCOUNT_INFO_DID_FAIL;
  payload: {
    error: string;
  };
}

export interface UserGetPurchases {
  type: ActionTypes.USER_GET_PURCHASES;
  payload: {
    user: UserData;
  };
}

export interface UserGetPurchasesDidSuccess {
  type: ActionTypes.USER_GET_PURCHASES_DID_SUCCESS;
  payload: {
    purchases: Purchase[];
  };
}

export interface UserGetPurchasesDidFail {
  type: ActionTypes.USER_GET_PURCHASES_DID_FAIL;
  payload: {
    error: string;
  };
}

export interface UserGetPurchaseResume {
  type: ActionTypes.USER_GET_PURCHASES_RESUME;
  payload: {
    user: UserData;
  };
}

export interface UserGetPurchaseResumeDidSuccess {
  type: ActionTypes.USER_GET_PURCHASES_RESUME_DID_SUCCESS;
  payload: {
    resume: UserPurchaseResume;
  };
}

export interface UserGetPurchaseResumeDidFail {
  type: ActionTypes.USER_GET_PURCHASES_RESUME_DID_FAIL;
  payload: {
    error: string;
  };
}

export interface UserChangeInfoViewStats {
  type: ActionTypes.USER_CHANGE_INFO_VIEW_STATS;
  payload: {
    index: number;
  };
}

export type UserAction =
  | UserGetAccountInfo
  | UserGetAccountInfoDidSuccess
  | UserGetAccountInfoDidFail
  | UserGetPurchases
  | UserGetPurchasesDidSuccess
  | UserGetPurchasesDidFail
  | UserGetPurchaseResume
  | UserGetPurchaseResumeDidSuccess
  | UserGetPurchaseResumeDidFail
  | UserChangeInfoViewStats;
