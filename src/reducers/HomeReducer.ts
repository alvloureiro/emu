import {
  ActionTypes,
  UserAccountInfo,
  UserAction,
  UserPurchaseResume,
  GeneralUserAccountResume,
  Purchase,
} from '../actions';

const InitUser = {
  email: '',
  id: -1,
  name: '',
  photo_url: '',
  signup_date: null,
};

const InitPurchaseResume = {
  amount_paid: 0,
  amount_payable: 0,
  unpaid_amount: 0,
};
interface HomeViewState {
  userInfoViewStatsIndex: number;
  userAccountInfo: UserAccountInfo;
  userPurchaseInfo: UserPurchaseResume;
  userGeneralAccountInfo: GeneralUserAccountResume;
  purchases: Purchase[];
  error: string;
}

const initialState: HomeViewState = {
  userInfoViewStatsIndex: 0,
  userAccountInfo: {
    available: 0,
    total: 0,
    used: 0,
    user: InitUser,
  },
  userPurchaseInfo: {
    user: InitUser,
    purchases: [],
    resume: InitPurchaseResume,
  },
  userGeneralAccountInfo: [],
  purchases: [],
  error: '',
};

export default (
  state: HomeViewState = initialState,
  action: UserAction,
): HomeViewState => {
  switch (action.type) {
    case ActionTypes.USER_CHANGE_INFO_VIEW_STATS: {
      return {...state, userInfoViewStatsIndex: action.payload.index};
    }
    case ActionTypes.USER_GET_ACCOUNT_INFO_DID_SUCCESS: {
      const {account} = action.payload;
      return {
        ...state,
        userAccountInfo: account,
      };
    }
    case ActionTypes.USER_GET_ACCOUNT_INFO_DID_FAIL: {
      const {error} = action.payload;
      return {
        ...state,
        error,
      };
    }
    case ActionTypes.USER_GET_PURCHASES_DID_SUCCESS: {
      const {purchases} = action.payload;
      return {
        ...state,
        purchases,
      };
    }
    case ActionTypes.USER_GET_PURCHASES_DID_FAIL: {
      const {error} = action.payload;
      return {
        ...state,
        error,
      };
    }
    case ActionTypes.USER_GET_PURCHASES_RESUME_DID_SUCCESS: {
      const {resume: userPurchaseInfo} = action.payload;
      return {
        ...state,
        userPurchaseInfo,
      };
    }
    case ActionTypes.USER_GET_PURCHASES_RESUME_DID_FAIL: {
      const {error} = action.payload;
      return {
        ...state,
        error,
      };
    }
    case ActionTypes.USER_GET_GENERAL_ACCOUNT_INFO_DID_SUCCESS: {
      const {info: userGeneralAccountInfo} = action.payload;
      return {
        ...state,
        userGeneralAccountInfo,
      };
    }
    case ActionTypes.USER_GET_GENERAL_ACCOUNT_INFO_DID_FAIL: {
      const {error} = action.payload;
      return {
        ...state,
        error,
      };
    }
    default:
      return state;
  }
};
