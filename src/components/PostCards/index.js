import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import SingleCard from './SingleCard'


function PostCards(props) {
  return (
    <div>
      <SingleCard this_post={props.user_posts[0]}/>
      <SingleCard this_post={props.user_posts[1]}/>
    </div>
  )
}

export default PostCards;