import React from 'react';
import {Container, Col, Row} from 'react-bootstrap';

const AUTH_URL ='https://accounts.spotify.com/authorize?client_id=9a14d7c8301240a3a0f999068d197353&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state'


function Login() {
  return (
    <Container /* className='d-flex flex-column align-items-center pt-5' style={{minHeight: '100vh'}} */>
      <Row>
            <Col className='d-flex flex-column align-items-start' style={{minHeight: '20vh', width:'100%'}} xs={{alignItems: 'center'}}>
                  <h1 style={{fontSize: '70px'}}>MIYUSIC</h1>
            </Col>
      </Row>
      
      <Row className='justify-content-md-center'>
            <Col xs lg="1">
                <a className="btn btn-success btn-lg" href={AUTH_URL}>
                      LOGIN
                </a>
            </Col>
      </Row>
        
    </Container>
 );
}

export default Login;
