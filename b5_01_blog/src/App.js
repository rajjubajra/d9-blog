import React from 'react';
import './BlogOne.scss';
import { Provider } from 'react-redux'
import { store } from './redux/store';
import RoutePages from './pages/RoutePages';
import {BrowserRouter} from 'react-router-dom';


function BaseOne() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <RoutePages />
      </Provider>
    </BrowserRouter>
  )
}

export default BaseOne