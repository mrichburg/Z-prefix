// import React, { useContext } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// // import '../styles/LoginPage.css'
// import { AuthContext } from '../App.js'

// //use the cookie to store it on browser


// const signInWithGoogle = (event, auth, authInstance, provider) => {
//     event.preventDefault()

//     auth.authFunctions.signInWithPopup(authInstance, provider)
//       .then((result) => {
//         console.log(result)
//         console.log(result._tokenResponse.idToken)
//         auth.authFunctions.getIdToken()
//       })
//       .then((token) => auth.cookie.setCookie(['Rant-Hub'], token))
//       .catch((error) => {
//         console.log(error)
//       })
//   }


// const SignUp = () => {

//   const auth = useContext(AuthContext)
//   const authInstance = auth.authInstance
//   const provider = auth.provider
//   // const provider = auth.provider

//   //place all firebase stuff in another file like in shifty app
//   //use useCookie to see if it works with the google button
//   //the function below should send a post request to the backend

  


//   return(
//         <>
//         <div>Hello World</div>
//         <div className="signIn">
//           <form onSubmit={event => signInWithGoogle(event, auth, authInstance, provider)}>
//             <input type='submit' value='Sign In With Google'/>
//           </form>
//         </div>
//         </>

//   )

// }


// export default SignUp
// // import './App.css';
// // import {initializeApp} from 'firebase/app'
// // import {getAuth, GoogleAuthProvider, signInWithPopup, getIdToken} from "firebase/auth"

// // import firebaseConfig from './firebaseConfig/json'

// // const authApp = initializeApp(firebaseConfig);
// // //instance of the firebase app
// // const authInstance = getAuth(authApp);

// // //everything below is a test
// // import {useCookies} from 'react-cookie'
// // import { useState, useEffect, createContext } from 'react';
// // import {Routes, Route, useNavigate} from 'react-router-dom';



// // function App() {
// //   const [cookies, setCookie, removeCookie] = useCookies(['Rant-Hub'])

// //   const contextVals = {
// //     authInstance:authInstance, 
// //     authFunctions: {
// //       signInWithGoogle: signInWithGoogle,
// //       getIdToken: getIdToken
// //     },
// //     cookie: {
// //       cookies: cookies,
// //       setCookie: setCookie,
// //       removeCookie: removeCookie
// //     }
// //   }

// //   return (
    
// //   );
// // }

// // export default App;
