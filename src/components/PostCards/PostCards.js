import React, {useEffect} from 'react';
import SingleCard from './SingleCard';

function PostCards({getUserPosts, user_posts, deletePost}) {

  useEffect(() => {
    getUserPosts()
},[getUserPosts]);
  let posts = user_posts

  return (
    <div>
      <ul>
        {posts.map((post, index) => {
          return <li key={index}>
          <SingleCard 
            this_post={post} 
            deletePost={deletePost} 
          />
          </li>
        })}
      </ul>
    </div>
  )
}

export default PostCards;
