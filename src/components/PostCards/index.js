import React, {useEffect} from 'react';

import SingleCard from './SingleCard'



function PostCards({getUserPosts, user_posts, deletePost, editPost}) {
  useEffect(() => {
    getUserPosts()  
   // eslint-disable-next-line react-hooks/exhaustive-deps
   },[]);
  let posts = user_posts
  // let posts = props.getUserPosts
  // console.log(posts)
  return (
    <div>
      {console.log(posts)}
      <ul>
        {posts.map((post, index) => {
          return <li key={index}><SingleCard this_post={post} deletePost={deletePost} editPost={editPost} /></li>
        })}
      </ul>
    </div>
  )
}

export default PostCards;