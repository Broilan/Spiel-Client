import React, { useState, useEffect } from 'react';
import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import { useParams, Link } from 'react-router-dom';
const { REACT_APP_SERVER_URL } = process.env;

const GroupPage = () => {
    const { idx } = useParams();
    const [user, setUser] = useState('');
    const [message, setMessage] = useState('');
    const [group, setGroup] = useState('');
    const [theName, settheName] = useState('');
    const [feed, setFeed] = useState([]);



    const handleMessage = (e) => {
        setMessage(e.target.value);
    }

    const handleUser = (e) => {
        setUser(e.target.value);
    }

    const handleGroup = (e) => {
        setGroup(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const newSpiel = { user, group, message };
        setAuthToken(localStorage.getItem('jwtToken'));
        axios.post(`${REACT_APP_SERVER_URL}/spiel`, newSpiel)

            .then(response => {

                console.log('===> Yay, new spiel', newSpiel);
                console.log(response);
                setFeed(response.data.spiel)

            })
            .catch(error => console.log('===> Error', error));
    }




    useEffect(() => {
        setAuthToken(localStorage.getItem('jwtToken'));
        axios.get(`${REACT_APP_SERVER_URL}/group/${idx}`)
            .then((response) => {
                settheName(response.data.foundGroup.groupName);
                console.log(theName);

            }).catch((err) => { console.log('****************ERROR', err) });
    }, []);


    return (
        <div>
        <div className="row mt-4" style={{ position: 'absolute', height: "50px", width: "60.2vw", top: "30px" }}>
            <div className="col-md-7 offset-md-3">
                <h1>Welcome to the {theName} group!</h1>
                <div className="card card-body">
                    <h2 className="py-2">Spiel</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="User">User</label>
                            <input type="User" name="User" value={user} onChange={handleUser} className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="Spiel">Message</label>
                            <input type="message" name="message" value={message} onChange={handleMessage} className="form-control" />
                        </div>
                        <input onClick={handleSubmit} type="submit" className="btn btn-primary float-right" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
        
    </div>
    )
}

export default GroupPage;