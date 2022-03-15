import React from 'react';
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
import SingleCard from './SingleCard'


function PostCards(props) {
  let posts = props.user_posts
  return (
    <div>
      <ul>
        {posts.map((post) => {
          return <li><SingleCard this_post={post}/></li>
        })}
      </ul>
    </div>
  )
}

export default PostCards;