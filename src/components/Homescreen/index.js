import React from 'react';
import Footer from '../Footer'
import Header from '../Header'
import PostCard from '../PostCard'
import NewNoteForm from '../NewNoteForm';
import LogoutButton from '../LogoutButton';

function Homescreen() {
  return (
    <div className="App">
      <Header />
      <LogoutButton />
      <PostCard />
      <PostCard />
      <PostCard />
      <NewNoteForm />
      <Footer />
    </div>
  )
}

export default Homescreen;