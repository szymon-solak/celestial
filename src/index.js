import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter,
  Route,
} from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import registerServiceWorker from './registerServiceWorker'

import Container from './components/container'
import {
  Nav,
  Link
} from './components/nav'

import Login from './pages/login'
import Register from './pages/register'
import List from './pages/list'
import Add from './pages/add'

// Import default theme
import tealDrop from './themes/teal-drop.js'

// @TODO
// Don't display if user is not logged in
// Or Display only login/register tabs
const Tabs = () => (
  <Nav>
    <Link to='/list'>Entries</Link>
    <Link to='/add'>Add</Link>
  </Nav>
)

const App = () => (
  <ThemeProvider theme={tealDrop}>
    <BrowserRouter>
      <Container>
        <Route exact path='/' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/list' component={List} />
        <Route path='/add' component={Add} />
        <Tabs />
      </Container>
    </BrowserRouter>
  </ThemeProvider>
)

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
