import React, { useState, useEffect } from "react";
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCrown} from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

const Me = () => {
    // Define state to hold the username
    const [username, setUsername] = useState("");

    useEffect(() => {
        // Retrieve the username from localStorage
        const storedUsername = localStorage.getItem('username');
        // Update the state with the retrieved username
        setUsername(storedUsername);
    }, []); // Only run once when the component mounts

    // Function to handle sign out
    const handleSignOut = () => {
        // Clear the localStorage
        localStorage.clear();
        // Redirect the user to the sign-up component
        window.location = "/signup";
    };

    return (
        <div className="theProfile">
            <div className="profile-user">
                <h2>Hi, <span>{username} <FontAwesomeIcon icon={faCrown} /></span></h2>
            </div>
            <div className="profile-address">
                <h3>address book</h3>
                <p className="line"></p>
                <h3>my payment options</h3>
                <p className="line"></p>
                <h3>manage my account</h3>
            </div> 
            <div className="profile-address">
                <h3>privacy & cookie policy</h3>
                <p className="line"></p>
                <h3>terms & conditions</h3>
                <p className="line"></p>
                <h3>rating & feedback</h3>
                <p className="line"></p>
                <h3>contact to us</h3>
                <p className="line"></p>
                <h3>ad choice</h3>
            </div>
            <div className="profile-out">
                <button onClick={handleSignOut}>Sign Out</button>
            </div>
            <div className="profile-button">
                <Link className="goBack" to="/">Go Back</Link>
            </div>
        </div>
    );
}

export default Me;
