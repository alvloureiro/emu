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
  console.log('LoginReducer: ', action);
  switch (action.type) {
    case ActionTypes.LOGIN_DID_ATTEMPT: {
      const {username} = action.payload.data;
      return {...state, username};
    }
    case ActionTypes.LOGIN_DID_SUCCESS: {
      const {user} = action.payload;
      return {...state, userData: user};
    }
    case ActionTypes.LOGIN_DID_FAIL: {
      return {...state, error: action.payload.error};
    }
    default:
      return state;
  }
};
