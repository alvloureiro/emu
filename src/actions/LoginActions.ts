import {ActionTypes} from './types';
import {UserCredentials, UserData} from './payloads';

export interface LoginDidAttempt {
  type: ActionTypes.LOGIN_DID_ATTEMPT;
  payload: {data: UserCredentials};
}

export interface LoginDidSucces {
  type: ActionTypes.LOGIN_DID_SUCCESS;
  payload: {user: UserData};
}

export interface LoginDidFail {
  type: ActionTypes.LOGIN_DID_FAIL;
  payload: {error: string};
}

export interface LoginTryRecoverPassword {
  type: ActionTypes.LOGIN_FORGOT_PASSWORD_REQUEST;
  payload: {email: string};
}

export interface LoginTryRecoverPasswordDidSuccess {
  type: ActionTypes.LOGIN_FORGOT_PASSWORD_REQUEST_DID_SUCCESS;
  payload: {message: string};
}

export interface LoginTryRecoverPasswordDidFail {
  type: ActionTypes.LOGIN_FORGOT_PASSWORD_REQUEST_DID_FAIL;
  payload: {error: string};
}

export type LoginAction =
  | LoginDidAttempt
  | LoginDidSucces
  | LoginDidFail
  | LoginTryRecoverPassword
  | LoginTryRecoverPasswordDidSuccess
  | LoginTryRecoverPasswordDidFail;
