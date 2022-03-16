import React from 'react';
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
import SingleCard from './SingleCard'


function PostCards(props) {
  let posts = props.user_posts
  return (
    <div>
      {console.log(posts)}
      <ul>
        {posts.map((post, index) => {
          return <li key={index}><SingleCard this_post={post}/></li>
        })}
      </ul>
    </div>
  )
}

export default PostCards;