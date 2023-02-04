import React, { useState, useEffect } from 'react';
import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import Spiel from './Spiel'
import Skeleton from '@mui/material/Skeleton';
import { useParams, Link, useHistory } from 'react-router-dom';
const { REACT_APP_SERVER_URL } = process.env;




const UserSpiel = (props) => {
    const [groupFeed, setGroupFeed]= useState([])
    const [name, setName] = useState(props.name);
    const id = props.id

    const [message, setMessage] = useState('');
    const [spielID, setSpielID] = useState('');
    const [group, setGroup] = useState('');
    const [feed, setFeed] = useState(["nothing to see here yet!"]);
    const history=useHistory();

   //calling the functions 
 
    
    function callHistory(idy) {
        history.push(`/spiel/post/${idy}`)
        }

    const [val,setVal]=useState('')
    const data=[
        "Java",
        "JavaScript",
        "React js",
        "Python",
        "C",
        "C++",
    ]
    // const [redirect, setRedirect] = useState(false);


    const handleMessage = (e) => {
        setMessage(e.target.value);
    }

    //submits spiel to the database and posts it to the feed
     function  handleSubmit(e) {
        console.log("func 1")
        e.preventDefault();
        const newSpiel = { name, group, message };
        setAuthToken(localStorage.getItem('jwtToken'));
          axios.post(`${REACT_APP_SERVER_URL}/spiel`, newSpiel)
            .then(response => {
                console.log('===> Yay, new spiel', newSpiel);
                const data = (response.data.spielID)
                    console.log("data", data)
                    axios.put(`${REACT_APP_SERVER_URL}/group/${group}/spiels/${data}`, newSpiel)
                    .then(response => {
                        console.log("responseY", response);
                        axios.put(`${REACT_APP_SERVER_URL}/users/${id}/spiels/${data}`, newSpiel)
                    }).then(response => {
                        console.log(response)
                        console.log("my iddddddddddd", id)
                        callHistory(data)
                    })
                    .catch(error => console.log('===> Error', error));
            })
            .catch(error => console.log('===> Error', error)); 
    }


    //association posted spiel to a user via the database
    const handleAssociation = (e) => {
        console.log("func 2")
        e.preventDefault();

        const userToSpiel = { name, group, message };
        setAuthToken(localStorage.getItem('jwtToken'));
        axios.put(`${REACT_APP_SERVER_URL}/users/${id}/spiels`, userToSpiel)

            .then(response => {

                console.log('===> Yay, new spiel', userToSpiel);
                console.log(response);
                setFeed(response.data)

            })
            .catch(error => console.log('===> Error', error));
    }

 

    useEffect(() => {
        setAuthToken(localStorage.getItem('jwtToken'));
        axios.get(`${REACT_APP_SERVER_URL}/group`)
            .then((response) => {
                console.log(response.data.group);
                setGroupFeed(response.data.group);
        
            }).catch((err) => { console.log('****************ERROR', err) });
        }, []);

    useEffect(() => {
        setAuthToken(localStorage.getItem('jwtToken'));
        axios.get(`${REACT_APP_SERVER_URL}/spiel`)
            .then((response) => {
                console.log(response.data.spiel);
                setFeed(response.data.spiel);

            }).catch((err) => { console.log('****************ERROR', err) });
    }, []);

    const handleDelete = (id) => {

        setAuthToken(localStorage.getItem('jwtToken'));
        axios.delete(`${REACT_APP_SERVER_URL}/spiel/${id}`)
    
          .then(response => {
    
            console.log(' deleted ===>', response );
            setFeed(response.data.spiel)
    
          })
          .catch(error => console.log('===> Error', error));
      }

    const callFunctions = (e) => {
        handleAssociation(e);
        handleSubmit(e);
        
    }


    return (
        <div>
            <div className="row mt-4" style={{ position: 'absolute', height: "50px", width: "60.2vw", top: "30px" }}>
                <div className="col-md-7 offset-md-3">
                    <div className="card card-body">
                        <h2 className="py-2">Spiel</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                            <h3 htmlFor="Group">Group</h3>
                            <input list="data" value={group} onChange={(e)=>setGroup(e.target.value)} placeholder="Search Groups" />
                                <datalist id="data">
                                    {groupFeed.map((idx)=><div><option>{idx.groupName}</option></div>)}
                                </datalist>
                            </div>
                            <div className="form-group">
                                <h3 htmlFor="Spiel">Message</h3>
                                <input type="message" name="message" value={message} onChange={handleMessage} className="form-control" />
                            </div>
                            <input onClick={callFunctions 
                            } type="submit" className="btn btn-primary float-right" value="Submit" />
                        </form>
                    </div>
                </div>
            </div>
            {feed?.map((f, idx) => <Spiel handleDelete={handleDelete} username={name} spielID={f._id} key={idx} name={f.name} message={f.message} group={f.group} />)}
        </div>
    );
}


export default UserSpiel;