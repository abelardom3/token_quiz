import { useState } from 'react'
import Unauthorized from './Components/Unauthorized'
import Authorized from './Components/Authorized'

function App() {

  const [auth, setAuth] = useState(false)

  const getAuth = async () => {
    try {
      const data = await fetch('http://localhost:3543/api/auth')
      const token = await data.json()
      localStorage.setItem('xAuthToken', token);
      if (localStorage.getItem('xAuthToken')) {
        setAuth(true)
      } else {
        console.log('No token')
      }
    } catch (error) {
      console.error(error.message)
    }
  }

  const logOut = () => {
    localStorage.removeItem('xAuthToken')
    setAuth(false)
  }

  return <div className="container">
    {auth ? <Authorized logOut={logOut} /> : <Unauthorized getAuth={getAuth} />}
  </div>
}

export default App;
