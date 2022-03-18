import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
// import EditModal from '../EditModal'

function SingleCard({this_post, deletePost}) {

  let content = this_post[0];
  let title = this_post[1];
  let lastModified = this_post[2];
  let postId = this_post[3];

  const handleClick = (e) => {
    deletePost(postId)
  }
  // const openModal = () => setShow(true);

  // const handleEditClick = (e) => {
  //   // console.log('this should be a modal')
  //   openModal();
  //   // editPost(postId)
  // }


  //   openModal();
  //   // editPost(postId)
  // }


  // const closeModal = () => setShow(false);


  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            ------
            {content}
            
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">Posted date: {lastModified}</Card.Footer>
          <Button onClick={handleClick} variant="primary">Delete Note</Button>
      </Card>
      {/* <EditModal show={show} openModal={openModal} closeModal={closeModal} editPost={editPost}/> */}

    </div>
  )
}

export default SingleCard;