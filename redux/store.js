import {AsyncStorage} from 'react-native';
import {applyMiddleware, createStore, compose} from 'redux';
// import { persistStore, autoRehydrate } from 'redux-persist';
// import createSagaMiddleware from 'redux-saga';
// import { createLogger } from "redux-logger";

// import rootReducer, { initActions } from './index';
// import { reduxPersist } from '../config';
// import rootSaga from '../sagas';

import reducers from './reducers';

export default () => {
  // const middleware = [];
  // const enhancers = [];
  // const sagaMiddleware = createSagaMiddleware();
  // const loggerMiddleware = createLogger();

  // middleware.push(sagaMiddleware);
  // middleware.push(loggerMiddleware);

  // enhancers.push(applyMiddleware(...middleware));
  // enhancers.push(autoRehydrate());

  // const store = createStore(rootReducer, undefined, compose(...enhancers));
  // sagaMiddleware.run(rootSaga);

  // persistStore(store, reduxPersist.config, () => {
  //     store.dispatch(initActions.initialize());
  // });

  return createStore(reducers);
};
