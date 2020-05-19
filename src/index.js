import React from 'react';
import { render } from 'react-dom';
import { compose, createStore, applyMiddleware } from 'redux';
import { rootReducer } from './redux/rootReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import App from './App';

const persistedState = localStorage.getItem('reduxState')
  ? JSON.parse(localStorage.getItem('reduxState'))
  : {};

const store = createStore(rootReducer, persistedState, applyMiddleware(thunk));
store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()));
});

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
