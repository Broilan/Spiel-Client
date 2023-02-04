import React from 'react';
import Card from 'react-bootstrap/Card';
import Avatar from '@mui/material/Avatar';
import CommentButton from './CommentButton';
import LikeButton from './LikeButton';
import Button from 'react-bootstrap/Button';


const Comment = (props) => {
  const poster = props.poster
  const commenterName = props.commenterName
  const currentUser = props.currentUser
  const datePosted = props.datePosted
  const group = props.group
  const message = props.message
  const likes = props.likes
  const cOnC = props.cOnC
  const comments = props.comments
  const ogPostId = props.ogPostId

  const handleLike = () => {

  }

  const likeNumber = () => {

  }
    
    return (
    <div>
        <Card style={{ maxWidth:"100vw", width: '40vw' }}>
          <Card.Body>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <Card.Title>{commenterName}</Card.Title>
            <Card.Subtitle>{group}</Card.Subtitle>
            <Card.Text>
            {message}
            </Card.Text>
            <Button style={{background:"transparent", border: "none"}} onClick={ handleLike}><LikeButton/>{likeNumber}</Button>
            <Button style={{background: "transparent", border:"none"}}> <CommentButton/> </Button> 
          </Card.Body>
        </Card>
    </div>
      );
    }

export default Comment;