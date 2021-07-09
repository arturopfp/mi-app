import React from 'react';
import './NavBar.css';
import shoppingBasket from '../../assets/img/basket.svg';
import search from '../../assets/img/search.svg'


function NavBar() {
    

    return(
        <nav className="NavBar">
            <p className="logo">MyStore</p>
            <div className="search-container">
                <input className="input-search" placeholder="Search ..."></input>
                <img id="searchIcon" className="search-icon" src={search} alt="" />
            </div>    
            <div className="login-container">
                <p className="login">login</p>
                <img className="shopping-cart" src={shoppingBasket} alt=""></img>
            </div>    
        </nav>
    );
}

export default NavBar;