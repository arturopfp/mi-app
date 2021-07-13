import React from 'react';
import './Card.css';
import add from '../../assets/img/add.svg'
import shoppingCar from '../../assets/img/shopping_cart.svg'



function Card(props) {

    let {imagen, price, title, brand, description} = props;   
    
    return(
        <div className="card-container">
            <img className="product-img" src={imagen} alt='Product'></img>
            <div className="price-container">
                <p className="price">$ {price}</p>
            </div>
            <div className="title-card">
                <h6>{title}</h6>
                <p className="brand">{brand}</p>
            </div>
            <p className="card-description">{description}</p>
            <div className="add-to-card">
                <img src={add} alt=""></img>
                <img src={shoppingCar} alt=""></img>
                <p className="add-txt">Add to card</p>
            </div>
        </div>
    );
}

export default Card;