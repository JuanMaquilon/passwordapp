import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import LoginForm from './components/loginForm';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
           <Switch>
             <Route exact path="/" component ={LoginForm} />
           </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
