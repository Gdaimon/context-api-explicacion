import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from './UserContext.jsx'

export const Login = () => {

  const { setUser } = useContext(UserContext)

  const handleLogin = () => {
    const user = {
      id: 12345,
      name: 'Pedro Picapiedra',
      email: 'pedro.picapiedra@gmail.com'
    }
    setUser(user)
  }

  return (
    <div>
      <h1>Login Component</h1>
      <hr />
      <Link to='/'
        className='btn btn-success'
        onClick={handleLogin}
      >Login</Link>
    </div>
  )
}
