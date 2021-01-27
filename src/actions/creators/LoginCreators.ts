import {UserCredentials, UserData} from '../payloads';
import {ActionTypes} from '../types';
import {LoginAction} from '../';

export const loginDidAttempt = (credentials: UserCredentials): LoginAction => {
  return {
    type: ActionTypes.LOGIN_DID_ATTEMPT,
    payload: {data: credentials},
  };
};

export const loginDidSucces = (user: UserData): LoginAction => {
  return {
    type: ActionTypes.LOGIN_DID_SUCCESS,
    payload: {data: user},
  };
};

export const loginDidFail = (data: string): LoginAction => {
  return {
    type: ActionTypes.LOGIN_DID_FAIL,
    payload: {error: data},
  };
};

export const recoverPassword = (email: string) => {
  return {
    type: ActionTypes.LOGIN_FORGOT_PASSWORD_REQUEST,
    payload: {
      data: email,
    },
  };
};

export const recoverPasswordDidSuccess = (message: string) => {
  return {
    type: ActionTypes.LOGIN_FORGOT_PASSWORD_REQUEST_DID_SUCCESS,
    payload: {
      data: message,
    },
  };
};

export const recoverPasswordDidFail = (error: string) => {
  return {
    type: ActionTypes.LOGIN_FORGOT_PASSWORD_REQUEST_DID_FAIL,
    payload: {error},
  };
};
