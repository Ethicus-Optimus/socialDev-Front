import React from 'react';
import Footer from '../Footer'
import Header from '../Header'
import PostCards from '../PostCards'
import NewNoteForm from '../NewNoteForm';
import LogoutButton from '../LogoutButton';

function Homescreen(props) {
  return (
    <div className="App">
      <Header />
      <h3>{props.email}</h3>
      <LogoutButton />

      <PostCards user_posts={props.user_posts} getUserPosts={props.getUserPosts} deletePost={props.deletePost}/>

      <NewNoteForm user_posts={props.user_posts} addPost={props.addPost} />
      <Footer />
    </div>
  )
}

export default Homescreen;