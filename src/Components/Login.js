import React from 'react';
import {Container} from 'react-bootstrap';

const AUTH_URL ='https://accounts.spotify.com/authorize?client_id=9a14d7c8301240a3a0f999068d197353&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state'


function Login() {
  return (
    <Container className='d-flex justify-content-center align-items-center' style={{minHeight: '100vh'}}>
                <a className="btn btn-success btn-lg" href={AUTH_URL}>
                    Login to Miyusic
                </a>
    </Container>
 );
}

export default Login;
