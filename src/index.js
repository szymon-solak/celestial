import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter,
  Route,
} from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import registerServiceWorker from './registerServiceWorker'

import Container from './components/container'
import Header from './components/header'
import Title from './components/title'
import Link from './components/link'
import Navigation from './components/navigation'

import Login from './pages/login'
import Register from './pages/register'
import List from './pages/list'
import Add from './pages/add'

// Import default theme
import tealDrop from './themes/teal-drop.js'

const App = () => (
  <ThemeProvider theme={tealDrop}>
    <BrowserRouter>
      <Container>
        <Header>
          <Title>
            <Link exact to='/'>Celestial</Link>
          </Title>
        </Header>
        <Route exact path='/' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/list' component={List} />
        <Route path='/add' component={Add} />
        <Navigation />
      </Container>
    </BrowserRouter>
  </ThemeProvider>
)

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
