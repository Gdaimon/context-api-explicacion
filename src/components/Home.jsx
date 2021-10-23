import React, { useContext } from 'react'
import { UserContext } from './UserContext.jsx'

export const Home = () => {

  // const contexto = useContext(UserContext)
  // console.log(contexto);

  const { user } = useContext(UserContext)


  return (
    <div>
      <h1>Home Component</h1>
      <hr />
      <pre>
        {JSON.stringify(user, null, 3)}
      </pre>
    </div>
  )
}
