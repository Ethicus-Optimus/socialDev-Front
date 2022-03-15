import React, {useState} from 'react';
// import Footer from '../Footer'
// import Header from '../Header'
import LandingPage from '../LandingPage'
import Homescreen from '../Homescreen'
// import Login from '../Login'
import { useAuth0 } from '@auth0/auth0-react'


function Main() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading){
    return <div>Loading...</div>;
  }

  // this hardcoded string will end up being a state object that contains all of the users posts. right now it is hardcoded with 2 notes
  let user_posts = ["Here is the main body of the note. It can be whatever you like and should be easy to see as you are scrolling down the page", "Here is the main body of the note. It can be whatever you like and should be easy to see as you are scrolling down the page"];

  return (
    <div className="App">
      {isAuthenticated ?
      <div>
        <Homescreen email={user.email} user_posts={user_posts}/>
      </div> 
       : 
      <LandingPage />}
    </div>
  )
}

export default Main;