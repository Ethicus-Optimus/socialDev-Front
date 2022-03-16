import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function SingleCard(props) {
  return (
    <div>
      {/* {console.log(props)} */}
      <Card style={{ width: '18rem' }}>
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        <Card.Body>
          {/* <Card.Title>Note Title</Card.Title> */}
          <Card.Text>
            {props.this_post}
          </Card.Text>
          <Button variant="primary">Edit Note</Button>
          <Button variant="primary">Delete Note</Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default SingleCard;