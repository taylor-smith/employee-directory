import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { render } from 'react-dom';
import reducer from './reducers/reducer'
import EmployeeList from './containers/EmployeeList'

require('../css/main.css');

// const store = (window.devToolsExtension ? window.devToolsExtension()(createStore) : createStore)(reducer, applyMiddleware(thunkMiddleware))
const store = createStore(reducer, applyMiddleware(thunkMiddleware));
const renderApp = () => {
  render (
    <Provider store={store}>
      <EmployeeList />
    </Provider>,
    document.getElementById('app')
  )
}

store.subscribe(renderApp);
renderApp();