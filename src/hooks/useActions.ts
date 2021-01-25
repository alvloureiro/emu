import {bindActionCreators} from 'redux';
import {useDispatch} from 'react-redux';
import {actionCreators} from '../actions';

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actionCreators, dispatch);
};
