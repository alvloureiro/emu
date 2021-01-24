import {ActionTypes, LoginAction, UserData} from '../actions';

interface LoginState {
  username: string;
  userData: UserData | null;
  error: string | null;
}

const intialState: LoginState = {
  username: '',
  userData: null,
  error: null,
};

export default (
  state: LoginState = intialState,
  action: LoginAction,
): LoginState => {
  switch (action.type) {
    case ActionTypes.LOGIN_DID_ATTEMPT: {
      const {username} = action.payload;
      return {...state, username};
    }
    case ActionTypes.LOGIN_DID_SUCCESS: {
      return {...state, userData: action.payload};
    }
    case ActionTypes.LOGIN_DID_FAIL: {
      return {...state, error: action.error};
    }
    default:
      return state;
  }
};
