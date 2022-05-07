
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
        console.log(result)
        // console.log(result._tokenResponse.idToken)
        let info = result._tokenResponse

        localStorage.setItem("isAuth", true)
        localStorage.setItem("firstName", info.firstName)
        localStorage.setItem("lastName", info.lastName)
        localStorage.setItem("email", info.email)
        localStorage.setItem("token", info.localId)
        context.setIsAuth(true)

        fetch(`${apiURL}/api/users/token/${info.localId}`)
        .then((response) => response.json())
        .then((data) => {
          console.log('this is the data from the api:', data)
          console.log(Array.isArray(data))
          data[0] ? console.log('this is the token:', data[0].token) : console.log('no data')
          if(data[0] && data[0].token === info.localId){
            return navigate('/')
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
            fetch(`${apiURL}/api/users`, request)
            .then(() => navigate('/'))
          }
        })
        // navigate("/")
      })
    }

  return (
  <>
    <div className='loginPage'>
      <p>Login with Google to continue</p>
      <button className="login-with-google-btn" onClick={googleLogin}>
        Login with Google
      </button>
    </div>
  </>

  )
}
{/* <p>Don't have a google account? Create one <a href='https://accounts.google.com/signup/v2/webcreateaccount?flowName=GlifWebSignIn&flowEntry=SignUp'>here</a></p> */}

//<a href='https://accounts.google.com/signup/v2/webcreateaccount?flowName=GlifWebSignIn&flowEntry=SignUp'> click here </a>
//<div>This website uses google authentication for it's users. In order to create an account</div>

export default Login; 



// 