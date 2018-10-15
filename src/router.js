import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom';
import HomeScreen from './Components/HomeScreen'
import FetchForecast from './Components/FetchForecast';

let Router = () =>
  <HashRouter>
    <Switch>
      <Route exact path='/' component={HomeScreen} />
      <Route path='/location/:location' component={FetchForecast}></Route>
      {/* <Route path='/location/:location/:date' component={FetchForecast}></Route> */}
    </Switch>
  </HashRouter>

  export default Router;