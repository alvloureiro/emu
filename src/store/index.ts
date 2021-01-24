import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from '../reducers';
import rootSaga from '../sagas';

const sagaMdw = createSagaMiddleware();

const store = createStore(reducers, {}, applyMiddleware(sagaMdw));

sagaMdw.run(rootSaga);

export default store;
