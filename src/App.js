import React, { Component } from 'react'
import {Button} from 'reactstrap'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import {Provider} from 'react-redux'

import store from './redux/store'

import Home from './pages/Home'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path='/' exact component={Home} />
          </Switch>
        </Router>
     </Provider>
    );
  }
}

