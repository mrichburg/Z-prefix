import React, {useState, useEffect} from 'react';
import Header from './Header'
import {Outlet} from 'react-router-dom'
import {useContext} from 'react'
import { AuthContext } from "../App.js";
import {useNavigate} from 'react-router-dom'
import { auth, provider } from '../firebaseConfig.js' 

function Home() {

  //auth.currentUser.displayName shows the name of the user
  //auth.currentUser.uid shows the id of the user
  //put these on the blog divs

  const [posts, setPosts] = useState([])
  const [details, setDetails] = useState()
  const [update, setUpdate] = useState(false)


  useEffect(() => {
    getPostData()
  }, [])


  const getPostData = () => {
    fetch('http://localhost:3001/api/posts')
    .then((data) => data.json())
    .then((data) => set(data))
  }




  return(
    <>
      <Header />
      <div>Home</div>
      <Outlet />
    
    </>


    
  ) 
}


export default Home; 