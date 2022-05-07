import React, {useState, useEffect} from 'react';
import Header from './Header'
import {Outlet} from 'react-router-dom'
import {useContext} from 'react'
import { AuthContext, apiURL } from "../App.js";
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
    fetch(`${apiURL}/api/posts`)
    .then((data) => data.json())
    .then((data) => {
      console.log('These are the posts pulled from the api :', data)
      setPosts(data)
    })
  }


  const popUp = (post) =>{
    
    if(details && details.title === post.title){
      setDetails()
    }else{
      setDetails(post)
    }
  }



  return(
    <>
      <Header />
      <div>Home</div>
      <div className='homePage'>
        {posts.map((post) => {
          return <div className='post'>
           Title: {post.title}
            Content: {post.content}
          </div>
        }
        )}
      </div>
      <Outlet />
    
    </>


    
  ) 
}


export default Home; 