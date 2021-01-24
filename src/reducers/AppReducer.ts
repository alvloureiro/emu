import {ActionTypes, AppAction} from '../actions';

interface AppState {
  show_loading: boolean;
  global_error: string | null;
}

const initialState: AppState = {
  show_loading: false,
  global_error: null,
};

export default (
  state: AppState = initialState,
  action: AppAction,
): AppState => {
  switch (action.type) {
    case ActionTypes.APP_SHOW_LOADING:
      return {show_loading: true, global_error: null};
    case ActionTypes.APP_HIDE_LOADING:
      return {show_loading: false, global_error: null};
    case ActionTypes.APP_DID_OCCUR_ERROR:
      return {show_loading: false, global_error: action.error};
    default:
      return state;
  }
};
