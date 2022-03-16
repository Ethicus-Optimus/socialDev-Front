import React, {useEffect} from 'react';

import SingleCard from './SingleCard'



function PostCards(props) {
  useEffect(props.getUserPosts,[])
  let posts = props.user_posts
  // let posts = props.getUserPosts
  // console.log(posts)
  return (
    <div>
      {/* {console.log(posts)} */}
      <ul>
        {posts.map((post, index) => {
          return <li key={index}><SingleCard this_post={post}/></li>
        })}
      </ul>
    </div>
  )
}

export default PostCards;