import React from 'react';
import {Provider} from 'react-redux';
import createStore from './redux/store';
import Home from './containers/home';

const store = createStore();

export default function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}
