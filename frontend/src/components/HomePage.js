import React, {useState, useEffect} from 'react';
import {Outlet} from 'react-router-dom'
import {useContext} from 'react'
import { AuthContext, apiURL } from "../App.js";
import {useNavigate} from 'react-router-dom'
import { auth, provider } from '../firebaseConfig.js' 
import '../App.css';
// import { post } from '../../../backend/src/routes/users.js';




function Home() {


  const [posts, setPosts] = useState([])
  const [details, setDetails] = useState(false)
  const [update, setUpdate] = useState(false)
  // const [title, setTitle] = useState("")
  // const [content, setContent] = useState("")


  useEffect(() => {
    getPostData()
  }, [])


  const getPostData = () => {
    fetch(`${apiURL}api/posts`)
    .then((data) => data.json())
    .then((data) => {
      // console.log('These are the posts pulled from the api :', data)
      setPosts(data)
    })
  }

//opens pop up
  const popUp = (post) =>{

    if(!details ){
      setDetails(post)
      localStorage.setItem('title', post.title)
      localStorage.setItem('content', post.content)
      
    }
  }

  //closes pop up
  const handleClose =(event) => {
    event.preventDefault()
    if(details){
      setUpdate(false)
      setDetails(false)
      localStorage.removeItem('title')
      localStorage.removeItem('content')
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
      setUpdate()
      setDetails()
      localStorage.removeItem('title')
      localStorage.removeItem('content')
      getPostData()
    })
  }


  const openUpdate = (event) => {
    event.preventDefault()
    if(!update){
      setUpdate(true)
    }
  }
  const closeUpdate = (event) => {
    event.preventDefault()
    if(update){
      document.getElementById('postTitle').setAttribute("readOnly", "")
      document.getElementById('postContent').setAttribute("readOnly", "")
      setUpdate()
    }
  }


  const handleUpdate = (event) => {
    event.preventDefault()


    let updatePost = {
      id: details.id, 
      user_id : details.user_id,
      title: document.getElementById('postTitle').value,
      content: document.getElementById('postContent').value,
      name: details.name
    }

    let request = {
      method: 'PATCH',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(updatePost)
    }

    fetch(`${apiURL}api/posts`, request)
    .then(() => {
      console.log('Post has been updated!!')
      setUpdate()
      setDetails()
      localStorage.removeItem('title')
      localStorage.removeItem('content')
      getPostData()
    })
    
  }


  const rmvAttributes = () => {

    document.getElementById('postTitle').removeAttribute("readOnly")
    document.getElementById('postContent').removeAttribute("readOnly")
  }




  return(
    <>    

    {details ?
      <>
        {/*if details (you clicked on the div) then show pop up
        if post.name === local storage name (post was made by user) you can edit or delete the post*/}
      <div className='popUpContainer'>
        <div>All Posts</div>
        <div className='postDetails'>
          <h1>Post Details</h1>
          <form onSubmit={handleUpdate} className='popUp'>
            <div className='formGroup'>
              <label> Title: </label>
              <input type='text' name='postTitle' id='postTitle' defaultValue={localStorage.getItem('title')} readOnly></input>
            </div>
            <div className='formGroup'>
              <label className='thing'> Post: </label>
              <textarea type='text' name='postContent' id='postContent' defaultValue={localStorage.getItem('content')} readOnly></textarea>
            </div>

            <button className='button' onClick={handleClose}>CLOSE</button>
            
            
            {details.name === localStorage.getItem('firstName') ?
              <div className='popUpButtons'>
                {console.log('these are the details:', details)}
                <button className='button' onClick={openUpdate}>EDIT</button>
                <button className='button' onClick={handleDelete}>DELETE</button>

                    {update ? 
                      //When you click the update button, remove disabled attributes
                      <>
                      {rmvAttributes()}
                      <input className='button' type='submit' name='update' id='update' value='UPDATE' />
                      <button className='button' onClick={closeUpdate}>BACK</button>
                      </>
                      :
                      ''
                    }
              </div>
              :
              //will not see buttons
              ''
            }
          </form>
        </div>
      </div>  
      </>
        :
        //will not see pop up
        ''
        
    }

      
      <div className='homePage'>
        {posts.map((post) => {
          return (
            <div className='post' key={post.id} onClick={() => popUp(post)}>
              <div className='postHeader'>
                
                <div className='title'><h1>{post.title}</h1></div>
              </div>
              <div className='postTextContainer'> {post.content} </div>
              <div className='postFooter'>
                <strong>@{ post.name }</strong> 
                 { post.date }
              </div>
            </div>
          );
        })}
      </div>
    
    </>
    
  ) 
}


export default Home; 