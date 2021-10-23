import React from 'react'
import { NavLink } from 'react-router-dom'

const user = {
  id: 12345,
  name: 'Pedro Picapiedra',
  email: 'pedro.picapiedra@gmail.com',
  role: 'vendedor'
}

export const Navbar = () => {
  return (
    <div className="container">
      <nav>
        <div className="btn-group d-flex justify-content-center">
          <NavLink
            exact
            to="/"
            className="btn btn-outline-primary"
            activeClassName="active"
          >Home</NavLink>
          <NavLink
            exact
            to="/login"
            className="btn btn-outline-secondary"
            activeClassName="active"
          >Login</NavLink>
          <NavLink
            exact
            to="/about"
            className="btn btn-outline-success"
            activeClassName="active"
          >About</NavLink>

          {
            user.role === 'admin' &&
            <NavLink
              exact
              to="/admin"
              className="btn btn-outline-warning"
              activeClassName="active"
            >Admin</NavLink>

          }


        </div>
      </nav>
    </div>
  )
}
