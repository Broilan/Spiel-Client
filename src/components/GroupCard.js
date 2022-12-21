import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { useState, useEffect } from 'react';


function GroupCard(props) {
    const description = props.description
    const group = props.group
    const id = props.id
    const groupDelete=props.groupDelete

    const callDelete = (e) => {
        e.preventDefault();
        groupDelete(id)
      }

  return ( 

    <Card style={{ position: "relative", width: '18rem' }}>
      <Card.Img img src="https://i.imgur.com/NmiWvIz.png" title="source: imgur.com" /> 
      <Card.Body>
        <Card.Title>{group}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Button variant="primary">View</Button>
        <Button variant="primary" onClick={callDelete}>Delete</Button>
      </Card.Body>
    </Card>
  );
}

export default GroupCard;