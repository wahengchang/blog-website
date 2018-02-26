import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from '../common/containers/App';
import Nav from '../common/containers/Nav';
import Board from '../common/containers/Board';
import Counter from '../common/containers/Counter';
import configureStore from '../common/store/configureStore';
import '../common/assets/index.css';

const preloadedState = window.PRELOADED_STATE;
const store = configureStore(preloadedState);
const supportsHistory = 'pushState' in window.history;

render(
  <Provider store={store}>
    <BrowserRouter forceRefresh={!supportsHistory}>
      <Switch>
        <Route exact path="/" component={Nav} />
        <Route path="/about" component={Board} />
        <Route path="/:user" component={App} />
        <Route component={Counter} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
