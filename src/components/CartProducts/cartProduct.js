import React from 'react';
import './cartProduct.css';
import {BrowserRouter as Router, Route, NavLink} from "react-router-dom";


function GenerateCart(key, cartItem, AddItem, DecreaseItem, DeleteItem) {
    console.log(key, "generate_products called")
    return (
        <div className="card">
            <div className="cardContent">
                <img className="cardImage" src = {cartItem.image} alt = 'Bild'/>
                <div className = "cardProductName">{cartItem.name}</div>
                <div className = "cardProductDescription">{cartItem.description}</div>
            </div>
            <div className="cardButtonRow">
                <h5>Preis:{cartItem.price}</h5>
                <div className="item"><input type="number" id={cartItem.name} min="1" max="100" /></div>
                <button className="cardButtonShopping" onClick={() => DeleteItem(cartItem)}></button>
            </div>
        </div> 
    )
}

export default GenerateCart;
