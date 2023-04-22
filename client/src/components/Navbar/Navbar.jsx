import React, { Component } from "react";
import "./Navbar.css";
function Navbar()
{
    return(
        <div className="Nav">
            <span>Logo</span>
            <span>Home</span>
            <span>Login/Signup</span>
            <span>About</span>
            <span>Dashboard</span>
        </div>
    );
}

export default Navbar;