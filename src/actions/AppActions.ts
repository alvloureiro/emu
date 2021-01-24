import {Action} from 'redux';
import {ActionTypes} from './types';

interface AppShowLoading {
  type: ActionTypes.APP_SHOW_LOADING;
}

interface AppHideLoading {
  type: ActionTypes.APP_HIDE_LOADING;
}

interface AppDidOccurError {
  type: ActionTypes.APP_DID_OCCUR_ERROR;
  error: string;
}

export type AppAction = AppShowLoading | AppHideLoading | AppDidOccurError;
