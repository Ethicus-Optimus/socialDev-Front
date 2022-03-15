import React from 'react';
// import Footer from '../Footer'
// import Header from '../Header'
import LandingPage from '../LandingPage'
import Homescreen from '../Homescreen'

function Main() {
  return (
    <div className="App">
      {/* These 2 will be in a boolean that basically says - If signed in, show Homescreen, if not signed in, show LandingPage */}
      {/* <LandingPage /> */}
      <Homescreen />
    </div>
  )
}

export default Main;