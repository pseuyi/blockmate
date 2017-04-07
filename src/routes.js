import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'

import App from './components/App'
import CreateUser from './components/CreateUser'
import Splash from './components/Splash'

const Routes = (props) => (
  <Router {...props} onUpdate={() => window.scrollTo(0, 0)}>
    <Route path="/" component={App}>
      <IndexRoute component={Splash}/>
      <Route path="/" component={Splash}/>
      <Route path="/create" component={CreateUser} />
    </Route>
  </Router>
)

export default Routes
