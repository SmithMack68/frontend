import React, { useState, useEffect } from 'react';
import Navbar from './components/Navigation/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/static/Home';
import Signup from './components/Authentication/Signup';
import Login from './components/Authentication/Login';
import { baseUrl, headers, getToken } from './Globals'

const App =() => {
  const [ currentUser, setCurrentUser ] = useState({})
  const [ loggedIn, setLoggedIn ] = useState(false)

  const loginUser = (user) => {
    setCurrentUser(user)
    setLoggedIn(true)
  }

  const logoutUser = () => {
    setCurrentUser({})
    setLoggedIn(false)
    localStorage.removeItem('jwt')
  }

    useEffect(() => {
      const token = localStorage.getItem('jwt')
      if(token && !loggedIn) {
        //fetch to rails backend
        fetch(baseUrl + '/get-current-user', {
          method: "GET",
          headers: {
            ...headers,
            ...getToken()
          }
        })
          .then(resp => resp.json())
          .then(user => loginUser(user))
      }
    }, [])


  return (
   <Router>
    { loggedIn ? <h1>You are logged in</h1> : null }
     <Navbar loggedIn={ loggedIn } logoutUser={ logoutUser }/>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup loginUser={ loginUser }/>} />
      <Route path="/login" element={<Login />} />
     </Routes>
  </Router>
  );
}

export default App;
