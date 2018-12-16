import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, ConcertList } from '../pages';

import configureRoute from '../configureRoute';

const App = () => (
    <React.Fragment>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/concerts" component={ConcertList}/>
        </Switch>
    </React.Fragment>
);

export default App;