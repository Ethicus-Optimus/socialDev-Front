import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

// In this form we need to find a way to save what the user types in and add it to the state object that holds all of the user's posts
function NewNoteForm(props) {

  // const addPost = (event) => {
  //   event.preventDefault();
  //   let note = event.target.value
    
  //   console.log(props.user_posts)
  // }
  const textInput = React.useRef();

  const clearImput = () => {
    textInput.current.value = "";
  }
  return (
    <div>
      <Form name="newPost" onSubmit={props.addPost} >
        <Form.Group className="mb-3" >
          <Form.Control as="textarea" rows={3} placeholder="New Note" id="newPost" name="newPost" ref={textInput}/>
        </Form.Group>
        <Button variant="primary" type="submit" >
        Add
      </Button>
      </Form>
    </div>
  )
}

export default NewNoteForm;