import React, { useEffect, useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import Divider from '@mui/material/Divider';
import { NavLink, Link, useHistory } from 'react-router-dom';
import SearchBar from './SearchBar';
import Button from 'react-bootstrap/Button';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Dropdown from 'react-bootstrap/Dropdown';
import Card from 'react-bootstrap/Card';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Fab from '@mui/material/Fab';
import ListSubheader from '@mui/material/ListSubheader';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';
import Drawer from '@mui/material/Drawer';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import axios from 'axios';
import "./Navbar.css"
const { REACT_APP_SERVER_URL } = process.env;






const Navbar = (props) => {
    // Notification state stuff
    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () => {

      setShow(true);}

    //Chat modal state stuff
    const [open, setOpen] = React.useState(false);
    const handleModalOpen = () => setOpen(true);
    const handleModalClose = () => setOpen(false);
    const [notifArray, setNotifArray] = useState()
    const [person, setPerson] = useState('/static/images/avatar/5.jpg')

    const { user } = props;
    const { name, id, email, exp } = user;

    const history=useHistory();

    function allNotifs() {
    history.push(`/Notifications`)
    }
  

      useEffect(() => {
        axios.get(`${REACT_APP_SERVER_URL}/users/notifications/${name}`)
        .then(response=> {
          console.log(response)
          setNotifArray(response.data.response)
        })
      }, [show])

    return (

        
    <div>
        {/* //Chats offCanvas  */} 
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
      {/* end of offcanvas */}

        <nav className="navbar navbar-expand-lg navbar-white bg-white" style={{ height: "55px"}}>
            <Link className="navbar-brand" to="/" >spiel</Link>
            <NavLink className="nav-link"  to="/group">groups</NavLink>

            <Button variant="none" onClick={handleShow}>Chats  </Button>
            <NavLink className="nav-link"  to="/settings">Settings</NavLink>

                {
                    props.isAuth 
                    ? 
                    <>
                        <NavLink className="nav-link"  to="/profile">profile</NavLink>
                        <NavLink className="nav-link"  to="/logout">logout</NavLink>
                        <span onClick={props.handleLogout} >↪️</span>
                        < SearchBar />
                    </>
                    : 
                    <>
                        <NavLink className="nav-link"  to="/signup">Create Account</NavLink>
                        <NavLink className="nav-link"  to="/login">Login</NavLink>
                        
                    </>
                  
                }
        </nav>
        </div>
    );
}


export default Navbar;