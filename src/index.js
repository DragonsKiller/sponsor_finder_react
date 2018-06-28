import React from 'react';
import { loadIdeas } from './actions/ideaActions';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';

const store = configureStore();
store.dispatch(loadIdeas());
render(
  <Provider store = { store }>
    <Router history = { browserHistory } routes = { routes } />
  </Provider>,
  document.getElementById('root')
);
