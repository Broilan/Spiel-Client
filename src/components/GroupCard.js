import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useParams, Link } from 'react-router-dom';


function GroupCard(props) {
    const description = props.description
    const group = props.group
    const id = props.id
    const { idx } = useParams();
    const groupDelete=props.groupDelete
    // const groupPageShow =props.groupPageShow

    const callDelete = (e) => {
        e.preventDefault();
        groupDelete(id)
      }

  return ( 
    <Card style={{position:"relative", width: "15rem" }}>
      <Card.Img img src="https://i.imgur.com/NmiWvIz.png" title="source: imgur.com" /> 
      <Card.Body>
        <Card.Title>{group}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
    
       <Link to={`/group/${id}`} ><Button variant="primary"  >View</Button></Link>
        <Button variant="primary" onClick={callDelete}>Delete</Button>
      </Card.Body>
    </Card>
  );
}

export default GroupCard;