import React, { useState, useEffect } from 'react';
//add useNavigate and place in the onsubmit method
import {useNavigate} from 'react-router-dom';
import {useContext} from 'react'
import { AuthContext, apiURL } from "../App.js";



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

    fetch(`${apiURL}api/users/token/${localStorage.getItem('token')}`)
    .then((res) => res.json())
    .then(data =>{

      let newPost = {
        user_id: data[0].id,
        title: title,
        content: content, 
        name: localStorage.getItem('firstName')
      }
  
      let request = {
        method: 'POST',
        headers: {
          'Content-Type' : 'application/json'
        },
        body: JSON.stringify(newPost)
      }
  
      fetch(`${apiURL}api/posts`, request)
      .then(() => {
        navigate('/myposts')
      })

      })    
  };
 
  return(


  <div className="homePage">
    {""}
    <div className='postDetails'>
      <h1>Make a Rant!</h1>
      {/* Here is where you create a form, then on submit, send a post request to the database */}
      <form onSubmit={handleSubmit}className='popUp'>
        <div className='formGroup' >
          <label> Title: </label>
          <input type='text' name='title' id='title' placeholder="Title..." />
        </div>
        <div className='formGroup'>
          <label className='thing'> Post: </label>
          <textarea type='text' name='content' id='content' placeholder='What ticked you off today?' />
        </div>
        <input type='submit' name='submit' id='submit' value='Submit Post'/>
      </form>
    </div>
  </div>


  ) 
}


export default MakePost; 