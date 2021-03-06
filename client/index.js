import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from '../common/containers/App';
import Counter from '../common/containers/Counter';
import configureStore from '../common/store/configureStore';
import '../common/assets/index.css';

const preloadedState = window.PRELOADED_STATE;
const store = configureStore(preloadedState);

render(
  <Provider store={store}>
    <div>
      <App />
      <Counter />
    </div>
  </Provider>,
  document.getElementById('root'),
);
