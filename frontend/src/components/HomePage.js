import React, {useState, useEffect} from 'react';
import {Outlet} from 'react-router-dom'
import {useContext} from 'react'
import { AuthContext, apiURL } from "../App.js";
import {useNavigate} from 'react-router-dom'
import { auth, provider } from '../firebaseConfig.js' 
import '../App.css';
import { post } from '../../../backend/src/routes/users.js';


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
    fetch(`${apiURL}api/posts`)
    .then((data) => data.json())
    .then((data) => {
      console.log('These are the posts pulled from the api :', data)
      setPosts(data)
    })
  }


  const popUp = (post) =>{
    
    if(details && details.id === post.id){
      setDetails()
    }else{
      setDetails(post)
    }
  }

  const handleDelete = (event) => {
    event.preventDefault()

    let deletePost = {
      id: details.id
    }

    let request = {
      method: 'DELETE',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(deletePost)
    }

    fetch(`${apiURL}api/posts`, request)
    .then(() => {
      getPostData()
    })
  }


  const openUpdate = () => {
    if(!update){
      setUpdate(true)
    }
  }

//get all from users where id matches the post's user_id
// return result.name

  return(
    <>

    

    {details ?

        //if details (you clicked on the div) then show pop up
        //if post.name === local storage name (post was made by user) you can edit or delete the post
      <div className='popUp'>
        <div className='popUpTitle'> {details.title} </div>
        <div className='popUpContent'>{details.content} </div>
        {details.name === localStorage.getItem('firstName') ?
          <div className='popUpButtons'>
            <button className='button' onClick={openUpdate}>EDIT</button>
            <button className='button' onClick={handleDelete}>DELETE</button>
          </div>
          //fix bug
            {update ? 
              <div className='popUp'>
                <div className='popUpTitle'> {details.title} </div>
                <div className='popUpContent'>{details.content} </div>
              </div>
            :
              ''
            }
          :
          //will not see buttons
          ''
        }
      </div>
        :
        //will not see pop up
        ''
    
    }

      <div>Home</div>
      <div className='homePage'>
        {posts.map((post) => {
          return (
            <div className='post' key={post.id} onClick={() => popUp(post)}>
              <div className='postHeader'>
                
                <div className='title'><h1>{post.title}</h1></div>
              </div>
              <div className='postTextContainer'> {post.content} </div>
              <h3> @{ post.name } </h3>
              <div> { post.date } </div>
            </div>
          );
        })}
      </div>
    
    </>
    
  ) 
}


export default Home; 