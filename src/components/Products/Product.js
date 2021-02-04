import React from 'react';
import './Products.css';
import {BrowserRouter as Router, Route, NavLink} from "react-router-dom";


function GenerateProducts(key, product, addToCart) {
    console.log(key, "generate_products called")
    return (
        <div className="card">
            <div className="cardContent">
                <img className="cardImage" src = {product.image} alt = 'Bild'/>
                <div className = "cardProductName">{product.name}</div>
                <div className = "cardProductDescription">{product.description}</div>
            </div>
            <div className="cardButtonRow">
                <h5>Preis:{product.price}</h5>
                <div className="item"><input type="number" id={product.name} min="1" max="100" /></div>
                <button className="cardButtonShopping" onClick={() => addToCart(product)}></button>
            </div>
        </div> 
    )
}

export default GenerateProducts;
