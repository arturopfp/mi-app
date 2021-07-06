import React from 'react';
import './Card.css';
import add from '../../assets/img/add.svg'
import shoppingCar from '../../assets/img/shopping_cart.svg'



function Card() {

    let img = 'https://i.pinimg.com/originals/eb/83/be/eb83be580847bcdc4c8f403c8085d3c8.jpg';
    
    
    return(
        <div className="card-container">
            <img className="product-img" src={img} alt='Product'></img>
            <div className="price-container">
                <p className="price">$962</p>
            </div>
            <div className="title-card">
                <h6>Awesome Granite Bacon</h6>
                <p className="brand">Osinski - Prosacco</p>
            </div>
            <p className="card-description">The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients.</p>
            <div className="add-to-card">
                <img src={add} alt=""></img>
                <img src={shoppingCar} alt=""></img>
                <p className="add-txt">Add to card</p>
            </div>
        </div>
    );
}

export default Card;