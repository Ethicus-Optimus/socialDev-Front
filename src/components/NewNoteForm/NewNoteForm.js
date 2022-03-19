import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function NewNoteForm(props) {

  return (
    <div>
      <Form name="newPost" onSubmit={props.addPost} >
        <Form.Group className="mb-3" >
          <Form.Control 
            placeholder="Note Title" 
            id="newPostTitle" 
            name="newPostTitle" 
          />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Control 
            as="textarea" 
            rows={3} 
            placeholder="New Note" 
            id="newPostContent" 
            name="newPostContent" 
          />
        </Form.Group>
        <Button variant="primary" type="submit" >
        Add
        </Button>
      </Form>
    </div>
  )
}

export default NewNoteForm;
