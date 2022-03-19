import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import PostCards from '../PostCards/PostCards';
import NewNoteForm from '../NewNoteForm/NewNoteForm';
import LogoutButton from '../LogoutButton/Logout';

function HomeScreen(props) {

  return (
    <div className="App">
      <Header />
      <h3>{props.email}</h3>
      <LogoutButton />
      <PostCards 
        user_posts={props.user_posts} 
        getUserPosts={props.getUserPosts} 
        deletePost={props.deletePost}/>
      <NewNoteForm 
        user_posts={props.user_posts} 
        addPost={props.addPost} />
      <Footer />
    </div>
  )
}

export default HomeScreen;