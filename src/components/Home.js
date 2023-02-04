import React from 'react';
import UserSpiel from "./UserSpiel"
import GroupsChart from "./GroupsChart"
import Spiel from "./Spiel"
import UserCard from './UserCard';
import './home.css'

const Home = (props) => {

   const { name, id, email, exp } = props.user;
        

    return (
        <div className='home'>
            <UserCard name={name} email={email} id={id}/>
            <div className='spielFeed'>
            < UserSpiel  name={name} id={id}/>
            < Spiel />
            </div>
            < GroupsChart id={id}/>
        </div>
    )
}

export default Home;