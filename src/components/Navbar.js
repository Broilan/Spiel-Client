import React, { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import Divider from '@mui/material/Divider';
import { NavLink, Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import Button from 'react-bootstrap/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Dropdown from 'react-bootstrap/Dropdown';
import Card from 'react-bootstrap/Card';
import "./Navbar.css"




const Navbar = (props) => {
    // Notification state stuff
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //Chat modal state stuff
    const [open, setOpen] = React.useState(false);
    const handleModalOpen = () => setOpen(true);
    const handleModalClose = () => setOpen(false);
  
    

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };
      

    return (

        
    <div>
        {/* //Chats offCanvas  */} 
        <div>
        <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Chats</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Card style={{ width: '18rem' }}>
        <List
      sx={{
        width: '140%',
        maxWidth: 500,
        bgcolor: 'background.paper',

        left:"-15px"
      }} 
    >
      <ListItem onClick={handleModalOpen} class="listItem">
       
        <ListItemAvatar >
          <Avatar>
            <ImageIcon />
            
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Johnny" secondary="Jan 9, 2014" />
      </ListItem>

      <Divider variant="inset" component="li" />

      <ListItem onClick={handleModalOpen} class="listItem">
        <ListItemAvatar>
          <Avatar>
            <WorkIcon />
          </Avatar>
        </ListItemAvatar>
        
        <ListItemText primary="Christine" secondary="Jan 7, 2014" />
        
      </ListItem>

      <Divider variant="inset" component="li" />

      <ListItem onClick={handleModalOpen} class="listItem">
        <ListItemAvatar>
          <Avatar>
            <BeachAccessIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Yahweh" secondary="July 20, 2014" />
      </ListItem>
    </List>


{/* modal which pops up with chats between users */}
    <div>
<Modal
  open={open}
  onClose={handleModalClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
    <Typography id="modal-modal-title" variant="h6" component="h2">
      Your chats with userX
    </Typography>
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
      Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
    </Typography>
  </Box>
</Modal>
</div>

    </Card>
    <NavLink className="nav-link"  to="/Chats"><Button variant="dark">See all</Button></NavLink>
        </Offcanvas.Body>
      </Offcanvas>
      </div>
      
        <nav className="navbar navbar-expand-lg navbar-white bg-white" style={{ height: "55px"}}>
            <Link className="navbar-brand" to="/" >spiel</Link>
            <NavLink className="nav-link"  to="/group">groups</NavLink>

             {/* Notification Dropdown */}
            <Dropdown>
      <Dropdown.Toggle variant="failure" id="dropdown-basic">
        Notifications
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Notification 1</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Notification 2</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Notification 3</Dropdown.Item>
        <Dropdown.Item href="/Notifications">See All</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

            <Button variant="none" onClick={handleShow}>Chats  </Button>
            <NavLink className="nav-link"  to="/group">Settings</NavLink>

                {
                    props.isAuth 
                    ? 
                    <>
                        <NavLink className="nav-link"  to="/profile">profile</NavLink>
                        <NavLink className="nav-link"  to="/logout">logout</NavLink>
                        <span onClick={props.handleLogout} className="logout">↪️</span>
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

