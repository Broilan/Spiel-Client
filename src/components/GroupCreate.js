import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import React, { useState, useEffect } from 'react';
import GroupCard from './GroupCard';
import Modal from 'react-bootstrap/Modal';
const { REACT_APP_SERVER_URL } = process.env;


function GroupCreate() {
   const [show, setShow] = useState(false);
    const [groupName, setGroupName] = useState('');
    const [description, setDescription] = useState('');
    const [groupFeed, setGroupFeed]= useState([])

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

const handleGroup = (e) => {
    setGroupName(e.target.value);
}

const handleDescription = (e) => {
    setDescription(e.target.value);
}

const postGroup = (e) => {
    e.preventDefault();
const newGroup = { groupName, description };
setAuthToken(localStorage.getItem('jwtToken'));
axios.post(`${REACT_APP_SERVER_URL}/group`, newGroup)

    .then(response => {

        console.log('===> Yay, new spiel', newGroup);
        console.log(response);
        setGroupFeed(response.data.group)

    })
    .catch(error => console.log('===> Error', error));
}

useEffect(() => {
setAuthToken(localStorage.getItem('jwtToken'));
axios.get(`${REACT_APP_SERVER_URL}/group`)
    .then((response) => {
        console.log(response.data.group);
        setGroupFeed(response.data.group);

    }).catch((err) => { console.log('****************ERROR', err) });
}, []);


const groupDelete = (id) => {

    setAuthToken(localStorage.getItem('jwtToken'));
    axios.delete(`${REACT_APP_SERVER_URL}/group/${id}`)

      .then(response => {

        console.log(' deleted ===>', response );
        setGroupFeed(response.data.group)
      })
      .catch(error => console.log('===> Error', error));
  }



  return (
    <>
    <Button variant="primary" onClick={handleShow}>
    Create a group
  </Button>

<Modal show={show} onHide={handleClose}>
<Modal.Header closeButton>
  <Modal.Title>New Group</Modal.Title>
</Modal.Header>
<Modal.Body>    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Group Name</Form.Label>
        <Form.Control onChange={handleGroup} type="email" placeholder="New Group" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Group Description</Form.Label>
        <Form.Control onChange={handleDescription} as="textarea" rows={3} />
      </Form.Group>
      
    </Form></Modal.Body>
<Modal.Footer>
  <Button variant="secondary" onClick={handleClose}>
    Close
  </Button>
  <Button variant="secondary" onClick={postGroup}>
    Submit
  </Button>
</Modal.Footer>
</Modal>
<div style={{position:"absolute", left: "10vw", display:"flex", flexDirection:"row",  flexWrap: "wrap", rowGap: "15px", columnGap: "15px"}}>
{groupFeed.map((gf, idx) => <GroupCard  groupDelete={groupDelete} id={gf._id} key={idx} group={gf.groupName} description={gf.description} />)} 
 </div>  
   </>
  );
  }

export default GroupCreate;

