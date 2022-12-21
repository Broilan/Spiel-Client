import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const Navbar = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-white bg-white" style={{ height: "55px"}}>
            <Link className="navbar-brand" to="/" >spiel</Link>
            <NavLink className="nav-link"  to="/about">📄</NavLink>
            <NavLink className="nav-link"  to="/group">👥</NavLink>

                {
                    props.isAuth 
                    ? 
                    <>
                        <NavLink className="nav-link"  to="/profile">👤</NavLink>
                        <span onClick={props.handleLogout} className="logout">↪️</span>
                        < SearchBar/>
                    </>
                    : 
                    <>
                        <NavLink className="nav-link"  to="/signup">Create Account</NavLink>
                        <NavLink className="nav-link"  to="/login">Login</NavLink>
                        
                    </>
                  
                }
        </nav>
    );
}

export default Navbar;

