import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from '../common/routes';
import configureStore from '../common/store/configureStore';

const preloadedState = window.PRELOADED_STATE;
const store = configureStore(preloadedState);
const supportsHistory = 'pushState' in window.history;

render(
  <Provider store={store}>
    <BrowserRouter forceRefresh={!supportsHistory}>
      {renderRoutes(routes)}
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
