import React from 'react'
import { Redirect, Route } from 'react-router'

// const user = null;
const user = {
  id: 12345,
  name: 'Pedro Picapiedra',
  email: 'pedro.picapiedra@gmail.com',
  role: 'admin'
}

export const RutaPrivada = ({ hasRole: rol, component: Component, ...rest }) => {

  console.log(rol);

  if (!user) return <Redirect to="/login" />
  if (rol && user.role !== rol) return <Redirect to="/" />

  return (
    <Route {...rest}>
      {
        user ?
          <Component />
          :
          <Redirect to="/login" />
      }
    </Route>

  )
}
