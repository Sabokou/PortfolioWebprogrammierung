import React from 'react';

import './Products.css';

function GenerateProducts(key, product, addToCart) {
    return (
        <div className="card">
            <div className="cardContent">
                <img className="cardImage" src = {product.image} alt = 'Bild'/>
                <div className = "cardProductName">{product.name}</div>
                <div className = "cardProductDescription">{product.description}</div>
            </div>
            <div className="cardButtonRow">
                <h5>Preis:{product.price}</h5>
                <div className="cardItem"><input type="number" id={product.name} min="1" max="100" placeholder="Menge" defaultValue="1" /></div>
                <button className="cardButtonShopping" onClick={() => addToCart(product)}>&#128722;</button>
            </div>
        </div> 
    )
}

export default GenerateProducts;
