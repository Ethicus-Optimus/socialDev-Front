import React, {useState} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import EditModal from '../EditModal'

function SingleCard({this_post, deletePost, editPost}) {
  let content = this_post[0];
  let title = this_post[1];
  let lastModified = this_post[2];
  let postId = this_post[3];

  const handleClick = (e) => {
    deletePost(postId)
  }
  const openModal = () => setShow(true);

  const handleEditClick = (e) => {
    // console.log('this should be a modal')
    openModal();
    // editPost(postId)
  }

  const [show, setShow] = useState(false)

  const closeModal = () => setShow(false);

  return (
    <div>
      <Card style={{ width: '18rem' }}>
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {content}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">Last Posted/Updated: {lastModified}</Card.Footer>
          <Button  onClick={handleEditClick} variant="primary">Edit Note</Button>
          <Button onClick={handleClick} variant="primary">Delete Note</Button>
      </Card>
      <EditModal show={show} openModal={openModal} closeModal={closeModal} editPost={editPost}/>
    </div>
  )
}

export default SingleCard;