import {ActionTypes} from './types';
import {UserCredentials, UserData} from './payloads';

interface LoginDidAttempt {
  type: ActionTypes.LOGIN_DID_ATTEMPT;
  payload: UserCredentials;
}

interface LoginDidSucces {
  type: ActionTypes.LOGIN_DID_SUCCESS;
  payload: UserData;
}

interface LoginDidFail {
  type: ActionTypes.LOGIN_DID_FAIL;
  error: string;
}

export type LoginAction = LoginDidAttempt | LoginDidSucces | LoginDidFail;
