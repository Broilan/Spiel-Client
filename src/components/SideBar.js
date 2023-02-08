import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Brand from './Brand';
import './sidebar.css'

import { AiOutlineHome } from 'react-icons/ai';
import { AiTwotoneHome } from 'react-icons/ai';

import { IoIosNotificationsOutline } from 'react-icons/io';
import { IoIosNotifications } from 'react-icons/io';

import { AiOutlineMail } from 'react-icons/ai';
import { AiTwotoneMail } from 'react-icons/ai';

import { BsBookmark } from 'react-icons/bs';
import { BsFillBookmarkFill } from 'react-icons/bs';

import { MdOutlinePersonOutline } from 'react-icons/md';
import { MdPerson } from 'react-icons/md';

import { AiOutlineSetting } from 'react-icons/ai';
import { AiTwotoneSetting } from 'react-icons/ai';

import { IoIosLogOut } from 'react-icons/io';

import { BsPersonPlus } from 'react-icons/bs';
import { BsPersonPlusFill } from 'react-icons/bs';

import { HiOutlineUserGroup } from 'react-icons/hi';
import { HiUserGroup } from 'react-icons/hi';

    import Offcanvas from 'react-bootstrap/Offcanvas';
    import List from '@mui/material/List';

import Button from 'react-bootstrap/Button';
import ListSubheader from '@mui/material/ListSubheader';

import axios from 'axios';

    

import { AiOutlineEllipsis } from 'react-icons/ai';


import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

const SideBar = (props) => {

    const { REACT_APP_SERVER_URL } = process.env;
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { handleLogout, user } = props;
    const [open, setOpen] = React.useState(false);
    const { name, id, email, exp } = user;
    const [show, setShow] = useState(false);
    const handleModalOpen = () => setOpen(true);
    const handleModalClose = () => setOpen(false);
    const [notifArray, setNotifArray] = useState()

    const [picA, setPicA] = useState()
    const [picB, setPicB] = useState()
    const [picC, setPicC] = useState()
    const [picD, setPicD] = useState()
    const [picE, setPicE] = useState()
    const [picF, setPicF] = useState()
    const [picG, setPicG] = useState()
    const [picH, setPicH] = useState()
    const [person, setPerson] = useState('/static/images/avatar/5.jpg')


    useEffect(() => {
        setPicA(AiOutlineHome)
        setPicB(IoIosNotificationsOutline)
        setPicC(AiOutlineMail)
        setPicD(BsBookmark)
        setPicE(MdOutlinePersonOutline)
        setPicF(AiOutlineSetting)
        setPicG(HiOutlineUserGroup)
        setPicH(BsPersonPlus)
    }, [])

    useEffect(() => {
        axios.get(`${REACT_APP_SERVER_URL}/users/notifications/${name}`)
        .then(response=> {
          console.log(response)
          setNotifArray(response.data.response)
        })
      }, [show])

    return (
        <div style={{position:"fixed", left:"16.5%", top:"0%", zIndex:"100"}}>
            
        <nav style={{display: "flex", flexDirection:"column", justifyContent:"normal",alignItems:"center", backgroundColor:"#F9FBFF", height:'100vw', width:"20rem"}}>
            <Brand />
   

                {
                    props.isAuth 
                    ? 
                    <> 
                    <div style={{display:"flex", flexDirection:"column"}}>
                        <div className='navdivs'><NavLink  className="navlink"  to="/">{picA}Home</NavLink></div>
                        <div className='navdivs'><NavLink  className="navlink"  to="/group">{picG}Groups</NavLink></div>
                        <div className='navdivs'><NavLink className="navlink" onClick={handleShow} to="/">{picB}Notifications</NavLink></div>
                        <div className='navdivs'><NavLink className="navlink"  to="/">{picC}Messages</NavLink></div>
                        <div className='navdivs'><NavLink className="navlink"  to="/group">{picD}Bookmarks</NavLink></div>
                        <div className='navdivs'><NavLink className="navlink"  to="/profile">{picE}Profile</NavLink></div>
                        <div className='navdivs'><NavLink className="navlink"  to="/settings">{picF}Settings</NavLink></div>
                        </div><div className="logout"><NavLink style={{color:"white", textDecoration:"none", marginLeft:"27%", fontSize:"1.2rem"}} onClick={props.handleLogout}  to="/logout">logout</NavLink></div>
                    </>
                    : 
                    <>
                        <NavLink className="navlink"  to="/signup">{picH}Create Account</NavLink>
                        <NavLink className="navlink"  to="/login">Login</NavLink>
                        
                    </>
                  
                }
                        <React.Fragment>
            <ListItem style={{ marginTop:"20vh"}}>
                <ListItemAvatar>
                  <Avatar alt="Profile Picture" src={person} />
                </ListItemAvatar>
                <ListItemText primary={name} secondary={email} />
                <ListItemText primary={<AiOutlineEllipsis style={{fontSize:"2rem", marginBottom:"2rem"}}/>} />
              </ListItem>
        </React.Fragment>


        
        </nav>
        <div>
        <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Notifications</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>

        <React.Fragment>
        <List sx={{ mb: 2 }}>         

          {notifArray?.map((n) => 
   
            <React.Fragment>
                <ListSubheader sx={{ bgcolor: 'white' }}>
                  Today
                </ListSubheader>


              <ListItem style={{border:"1px solid gray"}} onClick={handleModalOpen}>
                <ListItemAvatar>
                  <Avatar alt="Profile Picture" src={person} />
                </ListItemAvatar>
                <ListItemText primary={n.from} secondary={n.likeCommentOrFollow == "like"? "liked your post" : null} />
              </ListItem>
            </React.Fragment>
          )}
          
        </List>
 

    </React.Fragment>
    <NavLink className="nav-link"  to="/Chats"><Button variant="dark">See all</Button></NavLink>
        </Offcanvas.Body>
      </Offcanvas>
      </div>
        </div>
    )
}

export default SideBar;