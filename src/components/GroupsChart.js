import React, { useState } from 'react';

import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';

function GroupsChart(props) {
  const [groupName, setGroupName] = useState(props.groupName);
  const [description, setDescription] = useState(props.description);
  return (
    <div>
    <ListGroup as="ol" numbered style={{width: "300px", position: "absolute", right: "100px"}}>
        <h1>Groups</h1>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">{groupName}</div>
          {description}
        </div>
        <Badge bg="primary" pill>
          14
        </Badge>
      </ListGroup.Item>
    </ListGroup>
    </div>
  );
}

export default GroupsChart;