import React, {useEffect} from 'react';

import SingleCard from './SingleCard'
// import EditModal from '../EditModal'



function PostCards({getUserPosts, user_posts, deletePost}) {
  useEffect(() => {
    getUserPosts()
   // eslint-disable-next-line react-hooks/exhaustive-deps
   },[]);
  let posts = user_posts



  return (
    <div>
      {/* {console.log(posts)} */}
      <ul>
        {posts.map((post, index) => {
          return <li key={index}><SingleCard this_post={post} deletePost={deletePost} /></li>

        })}
      </ul>

    </div>
  )
}

export default PostCards;