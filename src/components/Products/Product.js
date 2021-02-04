import React from 'react';
import './Products.css';
import {BrowserRouter as Router, Route, NavLink} from "react-router-dom";


function generate_products(key, product, addToCart) {
    console.log("generate_products called")
    return (
        <div class="card">
            <div class="cardContent">
                <img class="cardImage" src = {product.image} alt = 'Bild'/>
                <div class = "cardProductName">{product.name}</div>
                <div class = "cardProductDescription">{product.description}</div>
            </div>
            <div class="cardButtonRow">
                <h5>Preis:{product.price}</h5>
                <button class="cardButtonShopping" onClick={() => addToCart(product)}></button>
            </div>
        </div> 
    )
}

export default generate_products;
