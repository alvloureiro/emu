import {ActionTypes, AppAction, Partners, Retailer} from '../actions';

interface AppState {
  show_loading: boolean;
  global_error: string | null;
  partners: Partners | null;
  partner: Retailer | null;
}

const initialState: AppState = {
  show_loading: false,
  global_error: null,
  partners: null,
  partner: null,
};

export default (
  state: AppState = initialState,
  action: AppAction,
): AppState => {
  switch (action.type) {
    case ActionTypes.APP_SHOW_LOADING:
      return {...state, show_loading: true};
    case ActionTypes.APP_HIDE_LOADING:
      return {...state, show_loading: false};
    case ActionTypes.APP_DID_OCCUR_ERROR:
      return {...state, show_loading: false, global_error: action.error};
    case ActionTypes.APP_GET_PARTNERS_DID_SUCCESS: {
      const {partners} = action.payload;
      return {...state, partners};
    }
    case ActionTypes.APP_GET_PARTNERS_DID_FAIL: {
      const {error: global_error} = action.payload;
      return {...state, global_error};
    }
    case ActionTypes.APP_GET_PARTNER_DETAIL_DID_SUCCESS: {
      const {partner} = action.payload;
      return {...state, partner};
    }
    case ActionTypes.APP_GET_PARTNER_DETAIL_DID_FAIL: {
      const {error: global_error} = action.payload;
      return {...state, global_error};
    }
    default:
      return state;
  }
};
