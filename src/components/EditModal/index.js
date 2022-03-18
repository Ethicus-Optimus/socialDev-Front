import React from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'

function EditModal({show, openModal, closeModal, editPost }) {
  
  // console.log(show[1])
  // let postId = show[1]
  // console.log(postId)
  // console.log(show)
  const handleEditClick = (e) => {
    // console.log('this should be a modal')

  }

  return (
    <>
        <Modal show={show} onHide={closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Update your Note!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container>
            <Form name="editPost" onSubmit={editPost} >
              <Form.Group >
                <Form.Control placeholder="New Title" id="editPostTitle" name="editPostTitle" />
              </Form.Group>
              <Form.Group >
                <Form.Control as="textarea" rows={3} placeholder="New Note" id="editPostContent" name="editPostContent" />
              </Form.Group>
              <Button onClick={handleEditClick} variant="primary" type="submit" >
              submit edit
              </Button>
            </Form>
            </Container>
          </Modal.Body>

        </Modal>
      </>
  )
}

export default EditModal;
