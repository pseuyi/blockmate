import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { browserHistory } from 'react-router'
import injectTapEventPlugin from 'react-tap-event-plugin'

import store from './store'
import App from './components/App'
import Routes from './routes'
import './index.css'

// tappable
injectTapEventPlugin()

ReactDOM.render(
  <Provider store={store}>
    <Routes history={browserHistory} />
  </Provider>,
  document.getElementById('root')
)
