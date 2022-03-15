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

  let user_posts = ["Here is the main body of the note. It can be whatever you like and should be easy to see as you are scrolling down the page", "Here is the main body of the note. It can be whatever you like and should be easy to see as you are scrolling down the page"];
  // console.log(user);
  // console.log(user.name);
  // console.log(user.email);

  // let email = user.email;
  // console.log(email);
  return (
    <div className="App">
      {isAuthenticated ?
      <div>
        {/* {user.email} */}
        <Homescreen email={user.email} user_posts={user_posts}/>
      </div> 
       : 
      <LandingPage />}
    </div>
  )
}

export default Main;