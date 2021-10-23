import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import { About } from '../components/About.jsx'
import { Admin } from '../components/Admin.jsx'
import { Home } from '../components/Home.jsx'
import { Login } from '../components/Login.jsx'
import { Navbar } from '../components/Navbar.jsx'
import { RutaPrivada } from '../components/RutaPrivada.jsx'

export const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <div className="container mt-3">

        <Switch>

          <RutaPrivada path="/about" component={About} />
          <Route path="/login" component={Login} />
          <RutaPrivada exact path="/" component={Home} />
          <RutaPrivada hasRole="admin" exact path="/admin" component={Admin} />

          <Redirect to="/" />

        </Switch>
      </div>

    </Router>
  )
}
