import React from 'react';
import './cartProduct.css';
import {BrowserRouter as Router, Route, NavLink} from "react-router-dom";


function GenerateCart(key, cartItem, AddItem, DecreaseItem, DeleteItem) {

    console.log(key, "Preis:", cartItem.price)
    return (
        <div className="productRow">
            <button className = "button margins border delete" onClick = {() => DeleteItem(cartItem)}>X</button>
            <button className = "button margins border add" onClick = {() => AddItem(cartItem)}>+</button>
            <button className = "button margins border subtract"onClick = {() => DecreaseItem(cartItem)}>-</button>
            
            <div className = "amount border margins">{cartItem.qty}x</div>
            <div className = "productPrice border margins">{cartItem.price}</div>
            
            <div className = "productName border margins">{cartItem.name}</div>
            <div className = "productTotal border margins">&#931; {(cartItem.qty * parseFloat(cartItem.price.substring(0, cartItem.price.length - 1))).toFixed(2)}€</div>
                
        
        </div>
         
    )
}

export default GenerateCart;
