import React from 'react';
import Card from 'react-bootstrap/Card';
import Avatar from '@mui/material/Avatar';


const Comment = () => {
    
    return (
    <div>
        <Card style={{ maxWidth:"100vw", width: '40vw' }}>
          <Card.Body>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <Card.Title>The dude replying</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">replying to @joe</Card.Subtitle>
            <Card.Text>
              yeah man idk. sounds like a personal problem tbh
            </Card.Text>
            <Card.Link href="#">Like</Card.Link>
            <Card.Link href="#">Comment</Card.Link>
          </Card.Body>
        </Card>
    </div>
      );
    }

export default Comment;