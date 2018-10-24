import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home'
import ConcertList from '../pages/ConcertList'

const App = () => (
  <React.Fragment>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/concert" component={ConcertList}/>
    </Switch>
  </React.Fragment>
)

export default App;