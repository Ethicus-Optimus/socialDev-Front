import React from 'react';
import Footer from '../Footer'
import Header from '../Header'
import Login from '../Login'

function LandingPage() {
  return (
    <div className="App">
      <Header />
      <h2>Welcome to our app ScrollyNotes</h2>
      <h3>Keep track of your Notes by date, and look through them whenever you like!</h3>
      <Login />
      {/* <h4>New here?</h4>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Sign Up
      </a>
      <h4>Returning User</h4>
      <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Log In
        </a> */}
      <Footer />
    </div>
  )
}

export default LandingPage;