import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import reducer from './reducers/reducer'
import EmployeeList from './containers/EmployeeList'

const store = (window.devToolsExtension ? window.devToolsExtension()(createStore) : createStore)(reducer)

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