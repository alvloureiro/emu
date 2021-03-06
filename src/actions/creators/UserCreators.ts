import {ActionTypes} from '../types';
import {
  UserData,
  UserAccountInfo,
  Purchase,
  UserPurchaseResume,
  GeneralUserAccountResume,
} from '../payloads';
import {UserAction} from '../UserActions';

export const userGetAccountInfo = (user: UserData): UserAction => {
  return {
    type: ActionTypes.USER_GET_ACCOUNT_INFO,
    payload: {user},
  };
};

export const userGetAccountInfoDidSucces = (
  account: UserAccountInfo,
): UserAction => {
  return {
    type: ActionTypes.USER_GET_ACCOUNT_INFO_DID_SUCCESS,
    payload: {account},
  };
};

export const userAccountInfoDidFail = (error: string): UserAction => {
  return {
    type: ActionTypes.USER_GET_ACCOUNT_INFO_DID_FAIL,
    payload: {
      error,
    },
  };
};

export const userGetPurchases = (user: UserData): UserAction => {
  return {
    type: ActionTypes.USER_GET_PURCHASES,
    payload: {user},
  };
};

export const userGetPurchasesDidSuccess = (
  purchases: Purchase[],
): UserAction => {
  return {
    type: ActionTypes.USER_GET_PURCHASES_DID_SUCCESS,
    payload: {
      purchases,
    },
  };
};

export const userGetPurchasesDidFail = (error: string): UserAction => {
  return {
    type: ActionTypes.USER_GET_PURCHASES_DID_FAIL,
    payload: {
      error,
    },
  };
};

export const userGetPurchasesResume = (user: UserData): UserAction => {
  return {
    type: ActionTypes.USER_GET_PURCHASES_RESUME,
    payload: {
      user,
    },
  };
};

export const userGetPurchasesResumeDidSuccess = (
  resume: UserPurchaseResume,
): UserAction => {
  return {
    type: ActionTypes.USER_GET_PURCHASES_RESUME_DID_SUCCESS,
    payload: {
      resume,
    },
  };
};

export const userGetPurchasesResumeDidFail = (error: string): UserAction => {
  return {
    type: ActionTypes.USER_GET_PURCHASES_RESUME_DID_FAIL,
    payload: {
      error,
    },
  };
};

export const userChangeInfoCardStats = (index: number): UserAction => {
  return {
    type: ActionTypes.USER_CHANGE_INFO_VIEW_STATS,
    payload: {
      index,
    },
  };
};

export const userGetGeneralUserAccountInfo = (user: UserData): UserAction => {
  return {
    type: ActionTypes.USER_GET_GENERAL_ACCOUNT_INFO,
    payload: {
      user,
    },
  };
};

export const userGetGeneralUserAccountInfoDidSuccess = (
  info: GeneralUserAccountResume,
): UserAction => {
  return {
    type: ActionTypes.USER_GET_GENERAL_ACCOUNT_INFO_DID_SUCCESS,
    payload: {
      info,
    },
  };
};

export const userGetGeneralUserAccountInfoDidFail = (
  error: string,
): UserAction => {
  return {
    type: ActionTypes.USER_GET_GENERAL_ACCOUNT_INFO_DID_FAIL,
    payload: {
      error,
    },
  };
};
