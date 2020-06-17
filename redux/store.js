import {applyMiddleware, createStore} from 'redux';
import appSaga from '../saga';
import createSagaMiddleware from 'redux-saga';

import reducers from './reducers';

export default () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(reducers, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(appSaga);
  return store;
};
