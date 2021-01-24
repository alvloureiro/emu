import {UserCredentials, UserData} from '../payloads';
import {ActionTypes} from '../types';
import {LoginAction} from '../';

export const loginDidAttempt = (credentials: UserCredentials): LoginAction => {
  return {
    type: ActionTypes.LOGIN_DID_ATTEMPT,
    payload: credentials,
  };
};

export const loginDidSucces = (data: UserData): LoginAction => {
  return {
    type: ActionTypes.LOGIN_DID_SUCCESS,
    payload: data,
  };
};

export const loginDidFail = (data: string): LoginAction => {
  return {
    type: ActionTypes.LOGIN_DID_FAIL,
    error: data,
  };
};
