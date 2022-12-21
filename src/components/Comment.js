import React from 'react';
import Card from 'react-bootstrap/Card';

const Comment = () => {
    
    return (
    <div>
        <Card style={{ width: '18rem' }}>
          <Card.Body>
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