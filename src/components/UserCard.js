import Card from 'react-bootstrap/Card';
import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';

function UserCard(props) {
  const { name } = props;

  return (
    <Card style={{ position: "relative", left: "-10vw", width: '25rem', height:"450px", padding: "10px" }}>
      <Card.Body>
      <Skeleton variant="circular" width={40} height={40} />
        <Card.Subtitle className="mb-2 text-muted">{name}</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default UserCard;