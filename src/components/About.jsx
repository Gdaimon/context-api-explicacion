import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from './UserContext.jsx'

export const About = () => {

  const { user, setUser } = useContext(UserContext)


  return (
    <div>
      <h1>About Component</h1>
      <hr />
      <pre>
        {JSON.stringify(user, null, 3)}
      </pre>
      <Link to='/login'
        className='btn btn-danger'
        onClick={() => setUser({})}
      >LogOut</Link>
    </div>
  )
}
