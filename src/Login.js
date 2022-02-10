import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

const auth_url ='https://accounts.spotify.com/authorize?client_id=8b945ef10ea24755b83ac50cede405a0&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state'


function Login() {
  return (
    <Container className='d-flex justify-content-center align-items-center'>
         {/* <Row className="justify-content-md-center">
             <Col xs lg="2"> */}
                <a className="btn btn-success btn-lg" href={auth_url}>
                    Login Spotify Account
                </a>
          {/*   </Col>
        </Row> */}
    </Container>
 );
}

export default Login;
