// import './App.css';
// import {initializeApp} from 'firebase/app'
// import {getAuth, GoogleAuthProvider, signInWithPopup, getIdToken} from "firebase/auth"

// import firebaseConfig from './firebaseConfig/json'

// const authApp = initializeApp(firebaseConfig);
// //instance of the firebase app
// const authInstance = getAuth(authApp);

// //everything below is a test
// import {useCookies} from 'react-cookie'
// import { useState, useEffect, createContext } from 'react';
// import {Routes, Route, useNavigate} from 'react-router-dom';

// const provider = new GoogleAuthProvider()


// export const AuthContext = createContext(null);
// //place all firebase stuff in another file like in shifty app
// //use useCookie to see if it works with the google button
// //the function below should send a post request to the backend

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

// function App() {
//   const [cookies, setCookie, removeCookie] = useCookies(['Rant-Hub'])

//   const contextVals = {
//     authInstance:authInstance, 
//     authFunctions: {
//       signInWithGoogle: signInWithGoogle,
//       getIdToken: getIdToken
//     },
//     cookie: {
//       cookies: cookies,
//       setCookie: setCookie,
//       removeCookie: removeCookie
//     }
//   }

//   return (
//     <div className="app">
//       <button onClick={signInWithGoogle}>Sign In With Google</button>
//       <p>{}</p>
//     </div>
//   );
// }

// export default App;
