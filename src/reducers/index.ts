import {combineReducers} from 'redux';
import AppReducer from './AppReducer';
import LoginReducer from './LoginReducer';

const reducers = combineReducers({
  app: AppReducer,
  login: LoginReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
