import React from 'react';
import './homebanner.css'

const HomeBanner = () => {        

    return (
        <div style={{position: "fixed", backgroundColor: "white", zIndex: "1", opacity: "90%", width: "29.9vw", height: "10.5vh", top:"5.7vh", border: "1px solid gray"}}>
            <p style ={{fontWeight:"bold", fontSize: "25px", marginLeft:"10px"}}>Home</p>
            <div style={{display:"flex", flexDirection:"row", justifyContent: "center"}}>
            <button class="childx" style={{ width: "50rem", height: "36px", fontSize: "20px", fontWeight: "bold", cursor: "pointer"}}>for you</button>
            <button class="childy" style={{width: "50rem", fontSize: "20px", height: "36px", fontWeight: "bold", cursor: "pointer"}}>following</button>
            </div>
        </div>
    )
}

export default HomeBanner;