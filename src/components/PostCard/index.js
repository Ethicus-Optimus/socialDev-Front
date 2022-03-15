import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


function PostCard() {
  return (
    <Card style={{ width: '18rem' }}>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Title>Note Title</Card.Title>
        <Card.Text>
          Here is the main body of the note. It can be whatever you like and should be easy to see as you are scrolling down the page 
        </Card.Text>
        <Button variant="primary">Edit Note</Button>
        <Button variant="primary">Delete Note</Button>
      </Card.Body>
    </Card>
  )
}

export default PostCard;