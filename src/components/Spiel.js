import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Dropdown from 'react-bootstrap/Dropdown';
import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
const { REACT_APP_SERVER_URL } = process.env;

// import Comment from "./Comment";


const Spiel = (props) => {

  const [show, setShow] = useState(false);
  const [newUser, setNewUser] = useState('');
  console.log(newUser)
  const [newMessage, setNewMessage] = useState('');
  const [newGroup, setNewGroup] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [user, setUser] = useState(props.user);
  const [message, setMessage] = useState(props.message);
  const [group, setGroup] = useState(props.group);
  const id = props.id
  const handleDelete = props.handleDelete

  const handleNewMessage = (e) => {
    setNewMessage(e.target.value);
  }

  const handleNewUser = (e) => {
    setNewUser(e.target.value);
  }

  const handleNewGroup = (e) => {
    setNewGroup(e.target.value);
  }

  const callDelete = (e) => {
    e.preventDefault();
    handleDelete(id)
  }

  const handleUpdate = (id) => {
        setUser(newUser)
        setMessage(newMessage)
        setGroup(newGroup)
    const data = { user, group, message
    }

    setAuthToken(localStorage.getItem('jwtToken'));
    
    axios.put(`${REACT_APP_SERVER_URL}/spiel/${id}`, data )
      .then(response => {
         console.log(response)

        console.log(' updated ===>', response );
      })
      .catch(error => console.log('===> Error', error));
  }

  return (
    <div style={{ position: "relative", top: "-110px", left: "289px" }}>
      <Card style={{ position: "relative", width: "34vw", maxheight: "300px" }}>
        <Dropdown style={{postion: "relative", left: "93%"}}>
          <Dropdown.Toggle variant="failure" id="dropdown-basic">
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={callDelete}>Delete</Dropdown.Item>
            <Dropdown.Item onClick={handleShow}>Edit</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Card.Title>{user}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{group}</Card.Subtitle>
        <Card.Text> {message} </Card.Text>
        <Button style={{backgroundColor: "transparent", position: "relative", width: "50px"}}variant="primary" onClick={handleClose}> 💬 </Button> <Button style={{backgroundColor: "transparent", position: "relative", width: "50px", left: "50px", bottom: "38px"}} variant="primary" onClick={handleClose}> 💓 </Button>
          
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editing Spiel</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label >User</Form.Label>
              <Form.Control onChange={handleNewUser} type="User" placeholder="Enter User" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label >Group</Form.Label>
              <Form.Control onChange={handleNewGroup} type="Group" placeholder="Enter Group" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label >Message</Form.Label>
              <Form.Control onChange={handleNewMessage} type="Message" placeholder="Enter Message" />
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

export default Spiel;