import React from 'react';
import UserSpiel from "./UserSpiel"
import GroupsChart from "./GroupsChart"
import Spiel from "./Spiel"

const Home = () => {

    return (
        <div>
            < UserSpiel />
            < Spiel />
            < GroupsChart/>
        </div>
    )
}

export default Home;