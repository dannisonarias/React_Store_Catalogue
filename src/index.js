import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import App from './components/App';
import reducer from './reducers/reducer1'
import 'semantic-ui-css/semantic.min.css'
import './styles.scss';

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App></App>
  </Provider>,
  document.getElementById('root'),
);
