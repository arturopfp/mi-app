import React from 'react';
import './NavBar.css';


function NavBar() {
    return(
        <nav className="NavBar">
            <p className="logo">MyStore</p>
            <input className="input-search"></input>
            <p className="login">login</p>
        </nav>
    );
}

export default NavBar;