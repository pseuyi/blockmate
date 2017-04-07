import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'

import App from './components/App'
import CreateUser from './components/CreateUser'
import Content from './components/Content'

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App}>
      <IndexRoute component={Content}/>
      <Route path="create" component={CreateUser} />
    </Route>
  </Router>
)

export default Routes
