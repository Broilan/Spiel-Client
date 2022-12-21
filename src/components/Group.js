import React from 'react';
import GroupCard from './GroupCard'
import GroupCreate from './GroupCreate'
import UploadAndDisplayImage from './UploadAndDisplayImage';
const Group = () => {
    return (
        <div>
        < GroupCreate />
        < GroupCard />
        < UploadAndDisplayImage />
        </div>
    )
}

export default Group;