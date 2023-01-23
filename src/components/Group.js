import React from 'react';
import GroupCreate from './GroupCreate'
import Badge from 'react-bootstrap/Badge';
import Dropdown from 'react-bootstrap/Dropdown';
import GroupHeader from './GroupHeader';

const Group = () => {
    return (
        <div>
            <GroupHeader style={{position: "absolute"}} />
                <Dropdown style={{position:"absolute", right:"30vw"}}>
      <Dropdown.Toggle variant="none" id="dropdown-basic">
      <Badge pill bg="dark"> Sort </Badge>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">All Groups</Dropdown.Item>
        <Dropdown.Item href="#/action-2">My groups</Dropdown.Item>
        <Dropdown.Item href="#/action-3">A-Z</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
        < GroupCreate />
        </div>
    )
}

export default Group;