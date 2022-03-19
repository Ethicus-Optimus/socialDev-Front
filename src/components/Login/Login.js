import React from 'react';
import Card from 'react-bootstrap/Card';
import LoginButton from './LoginButton';
import '../stylesheets/Login.css';

function Login () {

  return (
    <Card class = "login" style={{ width: '18rem' }} >
      <Card.Body >
        <Card.Title>Log In</Card.Title>
          <Card.Text>
            Click Below to Log In
          </Card.Text>
        {<LoginButton />}
      </Card.Body>
    </Card>
  )
}

export default Login;
