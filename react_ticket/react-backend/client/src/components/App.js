import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home'
import Test from '../pages/Test'
import TicketTrade from '../pages/TicketTrade'
import MyPage from '../pages/MyPage'

const App = () => (
  <React.Fragment>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/test" component={Test}/>
      <Route path="/tickettrade" component={TicketTrade}/>
      <Route path="/mypage" component={MyPage}/>
    </Switch>
  </React.Fragment>
)

export default App;