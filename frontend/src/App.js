import './App.css';
import HomePage from './components/HomePage';
import Login from './components/Login';
import MyPosts from './components/MyPosts';
import MakePost from './components/MakePost';
// import SignUp from './components/SignUp';
// import {useCookies} from 'react-cookie'
import React, { useState, useEffect, createContext } from 'react';
import {BrowserRouter as Router, Routes, Route, Link, useNavigate} from 'react-router-dom';
// import {signOut} from 'firebase/auth'
// import { auth } from './firebaseConfig.js' 



export const AuthContext = createContext(null);

function App() {
  // const [cookies, setCookie, removeCookie] = useCookies(['Rant-Hub'])
  
  const [isAuth, setIsAuth] = useState(false);

  // let navigate = useNavigate()

  // const signOut = () => {
  //   signOut(auth)
  //   .then(() => {
  //     localStorage.clear()
  //     setIsAuth(false)
  //     navigate("/")
  //   })
//import auth from firebase config??
  //}

  const contextVals = {
    isAuth: isAuth,
    setIsAuth: setIsAuth,
    /*authFunctions: {
      getIdToken: getIdToken,
    },
      cookie: {
      cookies: cookies,
      setCookie: setCookie,
      removeCookie: removeCookie
    }
    */
  }

  return (

    <div className="App">
      <AuthContext.Provider value={contextVals}>
        <Router>
          <Routes>
            <Route path='/' element={<HomePage  />} >
              <Route path='/login' element={<Login />} />
              <Route path='/myposts' element={<MyPosts />} />
              <Route path='/makepost' element={<MakePost />} />
            </Route>
          </Routes>
        </Router>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
