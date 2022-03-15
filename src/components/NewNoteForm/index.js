import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';


function NewNoteForm(props) {
  
  return (
    <div>

      {/* {console.log(props)} */}
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