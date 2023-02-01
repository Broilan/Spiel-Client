import React, { useState, useEffect } from 'react';
import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import UserCard from './UserCard';
import Card from 'react-bootstrap/Card';
import GroupsChart from './GroupsChart';

const Profile = (props) => {
    const [image, setImage] = useState(props.user.image); 
   const { handleLogout, user } = props;
   const { name, id, email, exp } = user;
   const [profileFeed, setProfileFeed]= useState([])
   
   const expirationTime = new Date(exp * 1000);
   const { REACT_APP_SERVER_URL } = process.env;
   let currentTime = Date.now();


     useEffect  (() => {
      setAuthToken(localStorage.getItem('jwtToken'));
       axios.get(`${REACT_APP_SERVER_URL}/users/${id}/spiels`)
        .then((response) => {
         setProfileFeed(response.data.Spiels);
            console.log("response.data", response.data.Spiels);
            console.log("profile feed", profileFeed)
    
        }).catch((err) => { console.log('****************ERROR', err) });
    }, []);




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


    
    return (

        <div className="text-center pt-4">
            <h1>My Posts</h1> 
        {profileFeed?.map((idx) =>   <div>  <Card style={{ top: "10vh", left:"20vw", position:"relative", width: '25vw' }}>
      <Card.Body>
        <Card.Title>{idx.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{idx.group}</Card.Subtitle>
        <Card.Text>
          {idx.message}
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card></div>)}
            <GroupsChart id={id} />
                          <form action={`${REACT_APP_SERVER_URL}/users/${id}`} method="PUT" encType="multipart/form-data" >
                            <label htmlFor="confirmPassword">Add Profile Picture</label>
                            <input onChange={handleNewImage} type='file' name="image" />
                        </form>
                        <UserCard style={{position: "absolute"}}name={name} email={email} id={id} />
        </div>
        
    );

}

export default Profile;

