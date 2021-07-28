import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Layout } from './container/Layout'
import { NotFound } from './container/NotFound'
import { Loading } from './components/Loading'
import './styles/components/app.scss'

const App = () => (
  <React.Suspense fallback={<Loading />}>
    <Router>
      <Switch>
        <Route path='/' name='Home' render={(props) => <Layout {...props} />} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  </React.Suspense>
)

export default App
