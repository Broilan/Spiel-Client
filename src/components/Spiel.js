import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Dropdown from 'react-bootstrap/Dropdown';
import Avatar from '@mui/material/Avatar';
import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';

import { useHistory } from "react-router-dom";

const { REACT_APP_SERVER_URL } = process.env;
// import Comment from "./Comment";


const Spiel = (props) => {

  const [show, setShow] = useState(false);
  const [newMessage, setNewMessage] = useState('');
  const [newGroup, setNewGroup] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const name = props.name
  const username=props.username
  const [message, setMessage] = useState(props.message);
  const [group, setGroup] = useState(props.group);
  const spielID = props.spielID
  const handleDelete = props.handleDelete

  const history=useHistory();



  function userCheck(){
    if (username==name){
      return <Dropdown.Item onClick={callDelete}>Delete</Dropdown.Item>
    }else {
      console.log("wrong user")
    }
  }

  function postredir() {
  history.push(`/SpielPost`)
  }

  const handleNewMessage = (e) => {
    setNewMessage(e.target.value);
  }

  const handleNewGroup = (e) => {
    setNewGroup(e.target.value);
  }

  const callDelete = (e) => {
    e.preventDefault();
    handleDelete(spielID)
  }

  const handleUpdate = (spielID) => {
        setMessage(newMessage)
        setGroup(newGroup)
    const data = { name, group, message
    }

    setAuthToken(localStorage.getItem('jwtToken'));
    
    axios.put(`${REACT_APP_SERVER_URL}/spiel/${spielID}`, data )
      .then(response => {
         console.log(response)

        console.log(' updated ===>', response );
      })
      .catch(error => console.log('===> Error', error));
  }


  return (
    <div  style={{ position: "relative", top: "30vh", left: "289px" }}>
      
      <Card style={{ cursor:"pointer", position: "relative", width: "34vw", maxheight: "300px" }}>
        <Dropdown style={{position: "relative", left: "93%"}}>
          <Dropdown.Toggle variant="failure" id="dropdown-basic">
          </Dropdown.Toggle>

          <Dropdown.Menu>
          <Dropdown.Item onClick={postredir}>See Post</Dropdown.Item>
           {userCheck()}
            <Dropdown.Item onClick={handleShow}>Edit</Dropdown.Item>

          </Dropdown.Menu>
        </Dropdown>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        <Card.Title>{name}</Card.Title>
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
            <h1>{name}</h1>
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