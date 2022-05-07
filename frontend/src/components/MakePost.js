import React, { useState, useEffect } from 'react';
//add useNavigate and place in the onsubmit method
import {useNavigate} from 'react-router-dom';
import {useContext} from 'react'
import { AuthContext } from "../App.js";



function MakePost() {
 
  //You are supposed to submit a post and the user_id for the post would be the id in users 
  //where the token from users table that matches localStorage.getItem('token')
  //user_id will be determined in the request body
  //meaning when you build it, the user_id must be pulled from a fetch which gives back 

  //grab all from users where the token in my storage matches the token in the user's table
  //make a special route for this
  let navigate = useNavigate()
  const context = useContext(AuthContext);

  useEffect(() =>{
    if(!context.isAuth){
      navigate('/login')
    }

  }, [])





  

  const handleSubmit = (event) => {
    event.preventDefault()
    let title = event.target.title.value
    let content = event.target.content.value

    fetch(`http://localhost:3001/api/users/token/${localStorage.getItem('token')}`)
    .then((res) => res.json())
    .then(data =>{

      let newPost = {
        user_id: data[0].id,
        title: title,
        content: content
      }
  
      let request = {
        method: 'POST',
        headers: {
          'Content-Type' : 'application/json'
        },
        body: JSON.stringify(newPost)
      }
  
      fetch('http://localhost:3001/api/posts', request)
      .then(() => {
        navigate('/')
      })

      })    
  };
 
  return(


  <div className="createPostPage">
    {""}
    <div className='cpContainer'>
      <h1>Create A Post</h1>
      {/* Here is where you create a form, then on submit, send a post request to the database */}
      <form onSubmit={handleSubmit}>
        <div className='inputGp'>
          <label> Title: </label>
          <input type='text' name='title' id='title' placeholder="Title..." />
        </div>
        <div className='inputGp'>
          <label> Post: </label>
          <input type='text' name='content' id='content' placeholder='Post...' />
        </div>
        <input type='submit' id='submit' value='Submit Post'/>
      </form>
    </div>
  </div>


  ) 
}


export default MakePost; 