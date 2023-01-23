import React, { useState, useEffect } from 'react';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
const { REACT_APP_SERVER_URL } = process.env;

function GroupsChart(props) {
  const [groupFeed, setGroupFeed]= useState([])

  useEffect(() => {
  setAuthToken(localStorage.getItem('jwtToken'));
  axios.get(`${REACT_APP_SERVER_URL}/group`)
      .then((response) => {
          console.log(response.data.group);
          setGroupFeed(response.data.group);
  
      }).catch((err) => { console.log('****************ERROR', err) });
  }, []);

  return (
    <div>
    <ListGroup as="ol" numbered style={{width: "300px", position: "absolute", top: "25%",  right: "10%"}}>
        <h1>My Groups</h1> 
           {groupFeed.map((idx) =>       <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
    
        <div className="ms-2 me-auto">
          <div className="fw-bold"> {idx.groupName}</div>
        </div>
        <Badge bg="primary" pill>
          14
        </Badge>
      </ListGroup.Item> )}
    </ListGroup>
    </div>
  );
}

export default GroupsChart;