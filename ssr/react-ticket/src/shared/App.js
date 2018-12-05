import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, ConcertList } from '../pages';
import { renderRoutes } from 'react-router-config';

import configureRoute from '../configureRoute';

class App extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/concerts" component={ConcertList}/>
                </Switch>
            </div>
        );
    }
}

export default App;