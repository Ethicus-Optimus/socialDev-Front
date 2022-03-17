import React, {useState} from 'react';
import axios from 'axios';
import LandingPage from '../LandingPage'
import Homescreen from '../Homescreen'
import { useAuth0 } from '@auth0/auth0-react'



function Main() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [user_posts, setUserPosts] = useState([]);
  
  const getUserPosts = async () => {
    let email = user.email;
    let url = `${process.env.REACT_APP_BACKEND_URL}/posts?email=${email}`;
    let postData = await axios.get(url);
    let postObjectsArray = postData.data
    let postArray = []

    for (let i = 0; i < postObjectsArray.length; i++){
      let object = postObjectsArray[i];
      let post = object.content;
      let title = object.title;
      let updated = object.updated;
      let postId = object._id;
      postArray.push([post,title,updated,postId]);
    }
    setUserPosts(user_posts.concat(postArray))
    // console.log(postObjectsArray[0])
    // console.log(email)

  }
  
  const addPost = async (e) => {
    e.preventDefault();
    let content = e.target.newPostContent.value;
    let title = e.target.newPostTitle.value;
    let email = user.email;
    let updated = new Date();
    let url = `${process.env.REACT_APP_BACKEND_URL}/posts`;

    let requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({updated: updated, email: email, content: content, title: title})
    }
    fetch(url, requestOptions)
      .then(response => console.log(response,content))
      // This works as a last resort, but want to find a way to reload state
      // .then(window.location.reload(false));
  }



  const editPost = async (e, postId) => {
    console.log(e)
    e.preventDefault();
    let content = e.target.editPostContent.value
    // console.log(content)
    let title = e.target.editPostTitle.value
    let email = user.email;
    let updated = new Date();
    let url = `${process.env.REACT_APP_BACKEND_URL}/posts/${e}`;
    // console.log(url)
    let requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({updated: updated, email: email, content: content, title: title})
    }
    fetch(url, requestOptions)
      .then(response => console.log(response))
  }

  const deletePost = async (e, postId) => {
    console.log(e)
    let url = `${process.env.REACT_APP_BACKEND_URL}/posts/${e}`;
    console.log(url)
    let requestOptions = {
      method: 'DELETE',
      body: url
    }
    fetch(url, requestOptions)
      .then(response => console.log(response))
  }

  if (isLoading){
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      {isAuthenticated ?
      <div>
        <Homescreen email={user.email} user_posts={user_posts} addPost={addPost} getUserPosts={getUserPosts} deletePost={deletePost} editPost={editPost}/>
      </div> 
       : 
      <LandingPage />}
    </div>
  )
}

export default Main;