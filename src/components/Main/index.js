import React, {useState} from 'react';
// import Footer from '../Footer'
// import Header from '../Header'
import LandingPage from '../LandingPage'
import Homescreen from '../Homescreen'
// import Login from '../Login'
import { useAuth0 } from '@auth0/auth0-react'


function Main() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  // this hardcoded string will end up being a state object that contains all of the users posts. right now it is hardcoded with 2 notes
  const [user_posts, setUserPosts] = useState(["Here is the main body of the note. It can be whatever you like and should be easy to see as you are scrolling down the page"]);

  // const handleClick = () => {
  //   console.log(user_posts)
  // }
  

  const addPost = (e) => {
    e.preventDefault();
    let note = e.target.newPost.value;
    // console.log(e.target.newPost.value);
    // console.log(note)
    setUserPosts(user_posts.concat(note))
  }
  

  if (isLoading){
    return <div>Loading...</div>;
  }

  // let user_posts = ["Here is the main body of the note. It can be whatever you like and should be easy to see as you are scrolling down the page", "Here is the main body of the note. It can be whatever you like and should be easy to see as you are scrolling down the page"];

  return (
    <div className="App">
      {isAuthenticated ?
      <div>
        <Homescreen email={user.email} user_posts={user_posts} addPost={addPost} />
      </div> 
       : 
      <LandingPage />}
    </div>
  )
}

export default Main;