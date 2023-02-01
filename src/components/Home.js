import React from 'react';
import UserSpiel from "./UserSpiel"
import GroupsChart from "./GroupsChart"
import Spiel from "./Spiel"
import UserCard from './UserCard';

const Home = (props) => {

   const { name, id, email, exp } = props.user;
        

    return (
        <div>
            <UserCard name={name} email={email} id={id}/>
            < UserSpiel  name={name} id={id}/>
            < Spiel />
            < GroupsChart id={id}/>
        </div>
    )
}

export default Home;