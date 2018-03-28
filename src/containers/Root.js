import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Router } from "react-router-dom"
import createHistory from "history/createBrowserHistory"
import configureStore from '../store/configureStore'
import App from './App'
 
const store = configureStore();
const history = createHistory();
 
export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Router>
      </Provider>
    )
  }
}