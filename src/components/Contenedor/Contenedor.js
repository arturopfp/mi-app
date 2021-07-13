import React, {useState, useEffect} from 'react'
import './Contenedor.css'
import Card from '../Card/Card.js'


export default function Contenedor() {
    const URL = 'https://ecomerce-master.herokuapp.com/api/v1/item/';
    const [cards, setCards] = useState([])

    useEffect(() => {
        getItems()
    }, [])

    const getItems = () => {
        fetch(URL)
            .then( resp => resp.json())
            .then( data => {
                setCards(data)
            })
    }

    return (
        <div className="main-container">

            {
                cards.map( (element, index) => {
                    if(index < 50 && element.image != null) {
                        return (
                            <Card 
                                imagen={element.image} 
                                price={element.price}
                                title={element.product_name} 
                                brand={element.brand}
                                description={element.description}
                                key={index}
                            />
                        )
                    }
                    
                })
            }
        </div>
    )
}
