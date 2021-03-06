import '../App.css';
import React from 'react';
import {useContext} from 'react'
import { AuthContext, apiURL } from "../App.js";
import {useNavigate} from 'react-router-dom'
import { auth, provider } from '../firebaseConfig.js' 
import { signInWithPopup} from 'firebase/auth'

function Login() {

  const context = useContext(AuthContext);

    let navigate = useNavigate();

    const googleLogin = () => {
      signInWithPopup(auth, provider)
      .then((result) => {
        // console.log(result)
        // console.log(result._tokenResponse.idToken)
        let info = result._tokenResponse

        localStorage.setItem("isAuth", true)
        localStorage.setItem("firstName", info.firstName)
        localStorage.setItem("lastName", info.lastName)
        localStorage.setItem("email", info.email)
        localStorage.setItem("token", info.localId)
        context.setIsAuth(true)

        fetch(`${apiURL}api/users/token/${info.localId}`)
        .then((response) => response.json())
        .then((data) => {
          // console.log('this is the data from the api:', data)
          console.log(Array.isArray(data))
          // data[0] ? console.log('this is the token:', data[0].token) : console.log('no data')
          if(data[0] && data[0].token === info.localId){
            return navigate('/myposts')
          }else{
            let newProfile = {
              first_name: info.firstName,
              last_name: info.lastName,
              email: info.email,
              token: info.localId              
            }

            let request = {
              method: 'POST',
              headers: {
                'Content-Type' : 'application/json'
              },
              body: JSON.stringify(newProfile)
            }
            fetch(`${apiURL}api/users`, request)
            .then(() => navigate('/'))
          }
        })
      })
    }

  return (
  <>
    <div className='loginPage'>
      <div className='googleDiv'>
        <button className="login-with-google-btn" onClick={googleLogin}>
          Login with Google Account!
        </button>
        <p>Or...</p>
        <a href='https://accounts.google.com/signup/v2/webcreateaccount?flowName=GlifWebSignIn&flowEntry=SignUp' target="_blank">
        <button className="login-with-google-btn" >
          Create a Google Account!
        </button>
        </a>
      </div>
    </div>
  </>

  )
}

export default Login; 
