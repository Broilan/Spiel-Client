import React, { useState, useEffect } from 'react';
import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import UserCard from './UserCard';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import GroupsChart from './GroupsChart';
import ProfileNav from './ProfileNav';
import LikeButton from './LikeButton';
import "./profile.css"
import CommentButton from './CommentButton';

const Profile = (props) => {
    const [image, setImage] = useState(props.user.image); 
   const { handleLogout, user } = props;
   const { name, id, email, exp } = user;
   const [selectedFeed, setSelectedFeed] = useState()
   const [profileFeed, setProfileFeed]= useState([])
   
   const expirationTime = new Date(exp * 1000);
   const { REACT_APP_SERVER_URL } = process.env;
   let currentTime = Date.now();


     useEffect  (() => {
      setAuthToken(localStorage.getItem('jwtToken'));
       axios.get(`${REACT_APP_SERVER_URL}/users/${id}/spiels`)
        .then((response) => {
         setProfileFeed(response.data.Spiels);
         setSelectedFeed('My Posts')
            console.log("response.data", response.data.Spiels);
            console.log("profile feed", profileFeed)
    
        }).catch((err) => { console.log('****************ERROR', err) });
    }, []);

    const likeFeed = () => {
              setAuthToken(localStorage.getItem('jwtToken'));
             axios.get(`${REACT_APP_SERVER_URL}/users/likes/${id}`)
              .then((response) => {
               setProfileFeed(response.data.Spiels);
               setSelectedFeed('My Likes')
              }).catch((err) => { console.log('****************ERROR', err) });
    }

    const commentFeed = () => {
      setAuthToken(localStorage.getItem('jwtToken'));
     axios.get(`${REACT_APP_SERVER_URL}/comment/${name}`)
      .then((response) => {
       setProfileFeed(response.data.comment);
       setSelectedFeed('My Comments')
      }).catch((err) => { console.log('****************ERROR', err) });
}

    const regularFeed = () => {
        setAuthToken(localStorage.getItem('jwtToken'));
        axios.get(`${REACT_APP_SERVER_URL}/users/${id}/spiels`)
         .then((response) => {
          setProfileFeed(response.data.Spiels);
          setSelectedFeed('My Posts')
             console.log("response.data", response.data.Spiels);
             console.log("profile feed", profileFeed)
     
         }).catch((err) => { console.log('****************ERROR', err) });
}






   // make a condition that compares exp and current time
   if (currentTime >= expirationTime) {
       handleLogout();
       alert('Session has ended. Please login to continue.');
   }

   const handleNewImage = (e) => {
    const path = e.target.files[0].name
    console.log(id)
    setImage(e.target.files[0].name)
    console.log(path)
    console.log(image)
setAuthToken(localStorage.getItem('jwtToken'));
axios.get(`${REACT_APP_SERVER_URL}/users/${id}`, path )
  .then(response => {
    
     console.log(response)
     console.log(user)

    console.log(' updated ===>', response );
  })
  .catch(error => console.log('===> Error', error));
}

const handleLike = () => {

}

const likeNumber = () => {

}




    
    return (
      <div style={{position: "absolute", width: '100vw', left: "0px"}}>
        <ProfileNav const regularFeed={regularFeed} commentFeed={commentFeed} likeFeed={likeFeed} id={props.user.id}/>
        <div className="home">
            
            <h1>{selectedFeed}</h1> 
        {profileFeed?.map((idx) =>   <div >  <Card className="spielFeed"style={{position:"relative"}}>
      <Card.Body>
        <Card.Title>{idx.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{idx.group}</Card.Subtitle>
        <Card.Text>
          {idx.message}
        </Card.Text>
        <Button style={{background:"transparent", border: "none"}} onClick={ handleLike}><LikeButton/>{likeNumber}</Button>
        <Button style={{background: "transparent", border:"none"}}> <CommentButton/> </Button> 
      </Card.Body>
    </Card></div>)}
            <GroupsChart id={id} />
                          <form action={`${REACT_APP_SERVER_URL}/users/${id}`} method="PUT" encType="multipart/form-data" >
                            <label htmlFor="confirmPassword">Add Profile Picture</label>
                            <input onChange={handleNewImage} type='file' name="image" />
                        </form>
                        <UserCard style={{position: "absolute"}}name={name} email={email} id={id} />
        </div>
        </div>
        
    );

}

export default Profile;

