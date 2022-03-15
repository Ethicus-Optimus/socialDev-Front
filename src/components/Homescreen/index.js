import React from 'react';
import Footer from '../Footer'
import Header from '../Header'
import PostCard from '../PostCard'
import NewNoteForm from '../NewNoteForm';

function Homescreen() {
  return (
    <div className="App">
      <Header />
      <PostCard />
      <PostCard />
      <PostCard />
      <NewNoteForm />
      <Footer />
    </div>
  )
}

export default Homescreen;