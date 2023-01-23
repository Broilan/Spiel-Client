import React from 'react';
import UserSpiel from "./UserSpiel"
import GroupsChart from "./GroupsChart"
import Spiel from "./Spiel"
import UserCard from './UserCard';

const Home = (props) => {
    const user = props.user;

    return (
        <div>
            <UserCard  userInfo={user}/>
            < UserSpiel />
            < Spiel />
            < GroupsChart/>
        </div>
    )
}

export default Home;