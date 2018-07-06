import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import { HashRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import store from './ducks/store';

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App />
   </HashRouter>
   </Provider>
, document.getElementById('root'));
registerServiceWorker();
