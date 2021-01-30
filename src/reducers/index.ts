import {combineReducers} from 'redux';
import AppReducer from './AppReducer';
import LoginReducer from './LoginReducer';
import HomeReducer from './HomeReducer';

const reducers = combineReducers({
  app: AppReducer,
  login: LoginReducer,
  home: HomeReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
