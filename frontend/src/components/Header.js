import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import '../App.css';
import {useContext} from 'react'
import { AuthContext } from "../App.js";
import {signOut} from 'firebase/auth';
import { auth } from '../firebaseConfig.js' 


const Header = () => {
  const context = useContext(AuthContext);

  let navigate = useNavigate()

  const LogOut = () => {
    signOut(auth)
    .then(() => {
      localStorage.clear()
      context.setIsAuth(false)
      navigate("/")
    })
  }

  return(
      <div className='header' id='header'>
          <h1>
              Rant-Hub
          </h1>
          <img src='https://socialpractices20-21.hotglue.me/?start.head.161369568048' />

        <Link to='/'>HomePage</Link>
        {/* Below is the logic I will use to hide things from unauthenticated users */}
        {!context.isAuth ? <Link to='/login'>Login</Link>
        
        : 
        
        <>
          <button className='logout' onClick={LogOut}>LogOut</button>
          <Link to='/makepost'>Make Post</Link>
          <Link to='/myposts'>My Posts</Link>
        </> }
        
      </div>

  )

}


export default Header