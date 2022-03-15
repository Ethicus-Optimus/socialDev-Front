import React from 'react';
import Footer from '../Footer'
import Header from '../Header'
import PostCards from '../PostCards'
import NewNoteForm from '../NewNoteForm';
import LogoutButton from '../LogoutButton';

function Homescreen(props) {
  return (
    <div className="App">
      {/* {console.log(props)} */}
      <Header />
      <h3>{props.email}</h3>
      <LogoutButton />
      {/* <h4>{props.user_posts}</h4> */}
      <PostCards user_posts={props.user_posts}/>
      <NewNoteForm user_posts={props.user_posts} />
      <Footer />
    </div>
  )
}

export default Homescreen;