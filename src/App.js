// Imports
import React, { useEffect, useState } from 'react';
import { Route, Link, Switch, Redirect, BrowserRouter as Router } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import axios from 'axios';


import 'bootstrap/dist/css/bootstrap.min.css';

// CSS
import './App.css';

// Components
import Signup from './components/Signup';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Home from './components/Home';
import Group from "./components/Group"
import Spiel from "./components/Spiel"
import GroupPage from './components/GroupPage';
import ChatsPage from './components/ChatsPage'
import UserCard from './components/UserCard';
import NotificationsPage from './components/NotificationsPage'
import Settings from './components/Settings';
import SpielPost from './components/SpielPost';
import likeButton from './components/LikeButton';
import Testing from './components/testing';

const { REACT_APP_SERVER_URL } = process.env;

const PrivateRoute = ({ component: Component, ...rest}) => {
  let token = localStorage.getItem('jwtToken');
  console.log('===> Hitting a Private Route');
  return <Route {...rest} render={(props) => {
    return token ? <Component {...rest} {...props} /> : <Redirect to="/login"/>
  }} />
}

  

function App(props) {
  // Set state values
  const [currentUser, setCurrentUser] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(true);

 
  useEffect(() => {
    let token;

    if (!localStorage.getItem('jwtToken')) {
      setIsAuthenticated(false);
      console.log('====> Authenticated is now FALSE');
    } else {
      token = jwt_decode(localStorage.getItem('jwtToken'));
      setAuthToken(localStorage.getItem('jwtToken'));
      setCurrentUser(token);
    }
  }, []);




  const nowCurrentUser = (userData) => {
    console.log('===> nowCurrent is here.');
    setCurrentUser(userData);
    setIsAuthenticated(true);
  }

  const handleLogout = () => {
    if (localStorage.getItem('jwtToken')) {
      // remove token for localStorage
      localStorage.removeItem('jwtToken');
      setCurrentUser(null);
      setIsAuthenticated(false);
    }
  }

  return (
    
    <Router>
    <div className="App">
      <Navbar handleLogout={handleLogout} isAuth={isAuthenticated} />
      <div className="container">
        <Switch>
          <Route path='/signup' component={Signup} />
          <Route 
            path="/login"
            render={(props) => <Login {...props} nowCurrentUser={nowCurrentUser} setIsAuthenticated={setIsAuthenticated} user={currentUser}/>}
          />
          <PrivateRoute path="/profile" component={Profile} user={currentUser}  handleLogout={handleLogout} />
          <PrivateRoute exact path="/" component={Home} user={currentUser} />
          <PrivateRoute exact path="/usercard" component={UserCard} user={currentUser} />
          <Route exact path="/group" component={Group} />
          <PrivateRoute exact path="/group/:idx" user={currentUser} component={GroupPage} />
          <PrivateRoute exact path="/spiel" component={Spiel} user={currentUser} />
          <Route path="/Chats" component={ChatsPage} />
          <Route path="/Notifications" component={NotificationsPage} />
          <Route path="/likebutton" component={likeButton} />
          <Route path="/Settings" component={Settings} />
          <Route path="/testing" component={Testing} />
          <PrivateRoute exact path="/spiel/post/:id" component={SpielPost} currentUser={currentUser}/>
          
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
