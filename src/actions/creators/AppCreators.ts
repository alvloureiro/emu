import {ActionTypes} from '../types';
import {AppAction} from '../AppActions';

export const AppShowLoading = (): AppAction => {
  return {
    type: ActionTypes.APP_SHOW_LOADING,
  };
};

export const AppHideLoading = (): AppAction => {
  return {
    type: ActionTypes.APP_HIDE_LOADING,
  };
};

export const AppDidOccurError = (error: string): AppAction => {
  return {
    type: ActionTypes.APP_DID_OCCUR_ERROR,
    error,
  };
};
