import React from "react";
import '../App.css'
import Logo from './logo';


function User() {
    return (
        <div className='User'>
            <div className="LogoPH">
                <Logo />
            </div>
            <div className="UserInfo">
                <p>Username</p>
                <a href="#">Logout</a>
            </div>
        </div>
    );
    };

export default User;