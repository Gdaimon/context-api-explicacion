import { useState } from 'react';
import './App.css';
import { Main } from './components/Main.jsx';
import { UserContext } from './components/UserContext.jsx';

function App() {

  // const user = {
  //   id: 12345,
  //   name: 'Pedro Picapiedra',
  //   email: 'pedro.picapiedra@gmail.com'
  // }

  const [user, setUser] = useState({})


  return (
    <UserContext.Provider value={
      {
        // user: user
        user,
        setUser
      }
    }>
      <Main />
    </UserContext.Provider>
  );
}

export default App;
