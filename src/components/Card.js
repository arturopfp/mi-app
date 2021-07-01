import React from 'react';
import './Card.css';


function Card() {

    let img = 'https://i.pinimg.com/originals/eb/83/be/eb83be580847bcdc4c8f403c8085d3c8.jpg';
    return(
        <div className="card-container">
            <img className="product-img" src={img} alt='Product'></img>
            <div className="price-container"></div>
        </div>
    );
}

export default Card;