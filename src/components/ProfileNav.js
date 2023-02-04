import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ProfileNav(props) {
    const id = props.id
    const likeFeed = props.likeFeed
    const regularFeed = props.regularFeed
    const commentFeed = props.commentFeed
  return (
    <>
      <Navbar bg="dark" variant="dark" style={{width: "100vw"}}>
        <Container>
          <Nav className="me-auto">
            <Nav.Link onClick={regularFeed}>my posts</Nav.Link>
            <Nav.Link onClick={likeFeed}>my likes</Nav.Link>
            <Nav.Link onClick={commentFeed}>my comments</Nav.Link>
            <Nav.Link href="#pricing">etc</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ProfileNav;