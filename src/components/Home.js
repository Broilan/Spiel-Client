import React from 'react';
import UserSpiel from "./UserSpiel"
import GroupsChart from "./GroupsChart"
import Spiel from "./Spiel"
import UserCard from './UserCard';
import HomeBanner from './HomeBanner';
import './home.css'

const Home = (props) => {

   const { name, id, email, exp } = props.user;
        

    return (
        <div className='home'>
             <div className='spielFeed'>
            <HomeBanner />
            < UserSpiel  name={name} id={id}/>
            < Spiel />
            </div>
            <UserCard name={name} email={email} id={id}/>
            < GroupsChart id={id}/>
        </div>
    )
}

export default Home;