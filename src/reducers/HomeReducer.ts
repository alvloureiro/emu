import {act} from 'react-test-renderer';
import {ActionTypes, UserAction} from '../actions';

interface HomeViewState {
  userInfoViewStatsIndex: number;
}

const initialState: HomeViewState = {
  userInfoViewStatsIndex: 0,
};

export default (
  state: HomeViewState = initialState,
  action: UserAction,
): HomeViewState => {
  switch (action.type) {
    case ActionTypes.USER_CHANGE_INFO_VIEW_STATS: {
      return {userInfoViewStatsIndex: action.payload.index};
    }
    default:
      return state;
  }
};
