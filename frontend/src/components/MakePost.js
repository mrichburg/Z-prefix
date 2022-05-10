import React, { useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import {useContext} from 'react'
import { AuthContext, apiURL } from "../App.js";



function MakePost() {

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