import React from 'react'
import './Products.css'

const Product = ({ product }) => {
    return (
        <div class="card">
            <div class="cardContent">
                <img class="cardImage" src = {product.image} alt = 'Bild'/>
                <div class = "cardProductName">{product.name}</div>
                <div class = "cardProductDescription">{product.description}</div>
            </div>
            <div class="cardButtonRow">
                <h5>Preis:{product.price}</h5>
                <button class="cardButtonShopping"></button>
            </div>
        </div> 
    )
}

export default Product;
