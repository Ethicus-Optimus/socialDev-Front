import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function SingleCard({this_post, deletePost}) {

  let content = this_post[0];
  let title = this_post[1];
  let lastModified = this_post[2];
  let postId = this_post[3];

  const handleClick = (e) => {
    deletePost(postId)
  }
  
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
    </div>
  )
}

export default SingleCard;
