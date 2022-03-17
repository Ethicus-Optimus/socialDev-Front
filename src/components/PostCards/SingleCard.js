import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function SingleCard(props) {
  let content = props.this_post[0];
  let title = props.this_post[1];
  let lastModified = props.this_post[2];
  return (
    <div>
      {/* {console.log(props)} */}
      <Card style={{ width: '18rem' }}>
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {content}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">Last Posted/Updated: {lastModified}</Card.Footer>
          <Button variant="primary">Edit Note</Button>
          <Button variant="primary">Delete Note</Button>
      </Card>
    </div>
  )
}

export default SingleCard;