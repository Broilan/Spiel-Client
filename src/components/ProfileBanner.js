import React from 'react';
import './profilebanner.css'
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const ProfileBanner = () => {   
    const history = useHistory();
    
    return (
        <div style={{position: "fixed", backgroundColor: "white", zIndex: "1", opacity: "90%", width: "33vw", height: "6vh", border: "2px solid black"}}>
            <div style={{display:'flex'}}>
                <button style={{border:"none", backgroundColor:"white"}} onClick={(e) => history.push("/")}><BsFillArrowLeftCircleFill /></button>
            <p style ={{fontWeight:"bold", fontSize: "25px", marginLeft:"10px"}}>Profile</p>
            </div>
        </div>
    )
}
export default ProfileBanner;