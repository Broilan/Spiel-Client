import React from 'react';
import UserSpiel from "./UserSpiel"
import GroupsChart from "./GroupsChart"
import UserCard from './UserCard';
import './home.css'

const Home = (props) => {

   const { name, id, email, exp } = props.user;
        

    return (
        <div className='home'>
             <div className='spielFeed'>
            < UserSpiel  name={name} id={id}/>
            </div>
            <UserCard name={name} email={email} id={id}/>
            < GroupsChart id={id}/>
        </div>
    )
}

export default Home;