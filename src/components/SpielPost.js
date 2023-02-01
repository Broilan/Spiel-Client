import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Dropdown from 'react-bootstrap/Dropdown';
import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import Avatar from '@mui/material/Avatar';
import Comment from './Comment';
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
    <div  style={{ position: "relative", maxWidth:"100vw", top: "5vh", left: "10vw" }}>
      
      <Card style={{ cursor:"pointer", position: "relative", width: "40vw", maxheight: "300px" }}>
        <Dropdown style={{postion: "relative", left: "93%"}}>
          <Dropdown.Toggle variant="failure" id="dropdown-basic">
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={callDelete}>Delete</Dropdown.Item>
            <Dropdown.Item onClick={handleShow}>Edit</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        <Card.Title>user</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">group</Card.Subtitle>
        <Card.Text> message </Card.Text>
        <Button style={{backgroundColor: "transparent", position: "relative", width: "50px"}}variant="primary" onClick={handleClose}> 💬 </Button> <Button style={{backgroundColor: "transparent", position: "relative", width: "50px", left: "50px", bottom: "38px"}} variant="primary" onClick={handleClose}> 💓 </Button>
          
      </Card>
      < Comment />
    </div>
  );
}

export default Spiel;