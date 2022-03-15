import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

// In this form we need to find a way to save what the user types in and add it to the state object that holds all of the user's posts
function NewNoteForm(props) {
  
  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          {/* <Form.Label visuallyHidden="true">New Post</Form.Label> */}
          <Form.Control as="textarea" rows={3} placeholder="New Note"/>
        </Form.Group>
      </Form>
    </div>
  )
}

export default NewNoteForm;