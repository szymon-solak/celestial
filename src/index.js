import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter,
  Route
} from 'react-router-dom'

import Container from 'components/container'
import Header from 'components/header'
import Navigation from 'components/navigation'
import PrivateRoute from 'components/private-route'

import Login from 'pages/login'
import Register from 'pages/register'
import List from 'pages/list'
import Add from 'pages/add'
import Account from 'pages/account'

import { Provider } from './context'

import './globalStyles'
import registerServiceWorker from './registerServiceWorker'

const App = () => (
  <Provider>
    <BrowserRouter>
      <Container>
        <Header />
        <Route exact path='/' component={Login} />
        <Route path='/register' component={Register} />
        <PrivateRoute path='/list' component={List} />
        <PrivateRoute path='/add' component={Add} />
        <PrivateRoute path='/account' component={Account} />
        <Navigation />
      </Container>
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
