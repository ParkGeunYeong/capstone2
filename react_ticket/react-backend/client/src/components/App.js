import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home'
import Test from '../pages/Test'

const App = () => (
  <React.Fragment>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/test" component={Test}/>
    </Switch>
  </React.Fragment>
)

export default App;