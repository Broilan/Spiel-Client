import Card from 'react-bootstrap/Card';
import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import { GoGear } from 'react-icons/go';

const { REACT_APP_SERVER_URL } = process.env;

function UserCard(props) {
  const [name, setName] = useState(props.name)
  const [bio, setBio] = useState(props.bio)
  const [email, setEmail] = useState(props.email)
  const id = props.id


  const [newName, setNewName] = useState('');
  const [newBio, setNewBio] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  
  const handleUpdate = () => {
    setName(newName)
    setBio(newBio)
    setEmail(newEmail)

    console.log("id ---->", id)
const data = { name, bio, email
}
setAuthToken(localStorage.getItem('jwtToken'));
    
axios.put(`${REACT_APP_SERVER_URL}/users/${id}`, data )
  .then(response => {
     console.log(response)

    console.log(' updated ===>', response );
  })
  .catch(error => console.log('===> Error', error));
  }

  const handleNewBio = (e) => {
    setNewBio(e.target.value);
  }

  const handleNewName = (e) => {
    setNewName(e.target.value);
  }

  const handleNewEmail = (e) => {
    setNewEmail(e.target.value);
  }

  return (
    <div>
    <Card style={{ position: "fixed", top:"25vh", left:"3vw", width: '25rem', height:"450px", padding: "10px" }}>
      <Card.Body>
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        <Card.Title className="mb-2 text-muted">{name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{email}</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Dropdown>
          <Dropdown.Toggle variant='none' id="dropdown-basic">{<GoGear />}
          </Dropdown.Toggle>

          <Dropdown.Menu>
          <Dropdown.Item onClick={handleShow} >Edit Info</Dropdown.Item>
            <Dropdown.Item >See Settings</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>

<Modal show={show} onHide={handleClose}>
<Modal.Header closeButton>
  <Modal.Title>Editing Spiel</Modal.Title>
</Modal.Header>
<Modal.Body>
  <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label >New Name</Form.Label>
      <Form.Control onChange={handleNewName} type="Name" placeholder="Enter Name" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label >New Email</Form.Label>
      <Form.Control onChange={handleNewEmail} type="Email" placeholder="Enter Email" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label >New Bio</Form.Label>
      <Form.Control onChange={handleNewBio} type="Bio" placeholder="Enter Bio" />
    </Form.Group>
  </Form>
</Modal.Body>
<Modal.Footer>
  <Button variant="secondary" onClick={handleClose}>
    Close
  </Button>
  <Button variant="primary" onClick={handleUpdate}>
    Save Changes
  </Button>
</Modal.Footer>
</Modal>
</div>
  );
}

export default UserCard;