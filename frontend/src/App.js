import './App.css';
import Header from './components/Header';
import AllPosts from './components/AllPosts';
import Login from './components/Login';
import MyPosts from './components/MyPosts';
import SignUp from './components/SignUp';
import {initializeApp} from 'firebase/app';
import {getAuth, GoogleAuthProvider, signInWithPopup, getIdToken} from "firebase/auth";
import {useCookies} from 'react-cookie'
import React, { useState, useEffect, createContext } from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';
import firebaseConfig from './firebaseConfig.json';

const authApp = initializeApp(firebaseConfig);
//instance of the firebase app
const authInstance = getAuth(authApp);

//everything below is a test


const provider = new GoogleAuthProvider()


export const AuthContext = createContext(null);
//place all firebase stuff in another file like in shifty app
//use useCookie to see if it works with the google button
//the function below should send a post request to the backend

// const signInWithGoogle = () => {
//   signInWithPopup(authInstance, provider)
//     .then((result) => {
//       console.log(result)
//       console.log(result._tokenResponse.idToken)
//     })
//     .catch((error) => {
//       console.log(error)
//     })
// }

function App() {
  const [cookies, setCookie, removeCookie] = useCookies(['Rant-Hub'])

  const contextVals = {
    authInstance:authInstance, 
    provider: provider,
    authFunctions: {
      getIdToken: getIdToken,
      signInWithPopup: signInWithPopup(authInstance, provider)
    },
    cookie: {
      cookies: cookies,
      setCookie: setCookie,
      removeCookie: removeCookie
    }
  }

  return (
    <div className="App">
      <AuthContext.Provider value={contextVals}>
        <Header />
        <Routes>
          <Route path='/' element={<AllPosts />} />
          <Route path='/login' element={<Login />} />
          <Route path='/myposts' element={<MyPosts />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
