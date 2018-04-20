import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter,
  Route
} from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import registerServiceWorker from './registerServiceWorker'

import Container from './components/container'
import Header from './components/header'
import Navigation from './components/navigation'
import PrivateRoute from './components/private-route'

import Login from './pages/login'
import Register from './pages/register'
import List from './pages/list'
import Add from './pages/add'

// Import default theme
import tealDrop from './themes/teal-drop.js'

import { Provider } from './context'

const App = () => (
  <ThemeProvider theme={tealDrop}>
    <Provider>
      <BrowserRouter>
        <Container>
          <Header />
          <Route exact path='/' component={Login} />
          <Route path='/register' component={Register} />
          <PrivateRoute path='/list' component={List} />
          <PrivateRoute path='/add' component={Add} />
          <Navigation />
        </Container>
      </BrowserRouter>
    </Provider>
  </ThemeProvider>
)

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
