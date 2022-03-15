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

  // console.log(user);
  // console.log(user.name);
  // console.log(user.email);

  // let email = user.email;
  // console.log(email);
  return (
    <div className="App">
      {/* These 2 will be in a boolean that basically says - If signed in, show Homescreen, if not signed in, show LandingPage */}
      {isAuthenticated ? <Homescreen /> : <LandingPage />}
      {/* <LandingPage />
      <Homescreen /> */}
    </div>
  )
}

export default Main;