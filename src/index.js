import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './redux/store';

import { GlobalStyle } from './GlobalStyle';
import App from './App';


ReactDOM.render(
    <Provider store={store}>
      <GlobalStyle />
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>,
  document.querySelector('#root')
);
