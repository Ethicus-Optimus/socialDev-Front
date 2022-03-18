import React, {useState} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import EditModal from '../EditModal'

function SingleCard({this_post, deletePost, editPost, addId, handleEditClick, openModal, closeModal, show}) {
  let content = this_post[0];
  let title = this_post[1];
  let lastModified = this_post[2];
  let postId = this_post[3];

  const handleClick = (e) => {
    deletePost(postId)
  }

  // const [show, setShow] = useState([false]);
  // const openModal = () => setShow([true]);
  // const closeModal = () => setShow([false]);

  


  const handleButtonClick = () => {
    handleEditClick(postId);
    openModal();
  }
  // const handleEditClick = () => {
  //   addId(postId)
  //   console.log(postId)
  //   console.log(show)

  //   openModal();
  //   // editPost(postId)
  // }


  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {content}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">Last Posted/Updated: {lastModified}</Card.Footer>
          <Button  onClick={handleButtonClick} variant="primary">Edit Note</Button>
          <Button onClick={handleClick} variant="primary">Delete Note</Button>
      </Card>
      <EditModal show={show} openModal={openModal} closeModal={closeModal}/>
    </div>
  )
}

export default SingleCard;