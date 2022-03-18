import React, {useEffect, useState} from 'react';

import SingleCard from './SingleCard'
import EditModal from '../EditModal'



function PostCards({getUserPosts, user_posts, deletePost, editPost}) {
  useEffect(() => {
    getUserPosts()
   // eslint-disable-next-line react-hooks/exhaustive-deps
   },[]);
  let posts = user_posts



  const [show, setShow] = useState([false]);
  const [currentId, setCurrentId] = useState("")

  const openModal = () => {
    console.log('hi from open modal function')
    setShow([true]);
  }
  const closeModal = () => setShow([false]);
  const setId = (id) => setCurrentId(id)

  // const addId = (id) => setShow(show.push(id))

  const handleEditClick = (postId) => {
    // addId(postId)
    // console.log(postId)
    console.log(show)
    setId(postId)
    console.log(currentId)

    // openModal();
    // editPost(postId)
  }


  return (
    <div>
      {/* {console.log(posts)} */}
      <ul>
        {posts.map((post, index) => {
          return <li key={index}><SingleCard this_post={post} deletePost={deletePost} editPost={editPost} handleEditClick={handleEditClick} openModal={openModal} currentId={currentId}/></li>
        })}
      </ul>

    </div>
  )
}

export default PostCards;