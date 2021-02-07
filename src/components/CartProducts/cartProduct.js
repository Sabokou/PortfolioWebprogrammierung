import React from 'react';
import './cartProduct.css';
import {BrowserRouter as Router, Route, NavLink} from "react-router-dom";


function GenerateCart(key, cartItem, AddItem, DecreaseItem, DeleteItem) {

    console.log(key, "Preis:", cartItem.price)
    return (
        <div className="productRow">
            <button className = "button delete" onClick = {() => DeleteItem(cartItem)}>X</button>
            <button className = "button add" onClick = {() => AddItem(cartItem)}>+</button>
            <button className = "button subtract"onClick = {() => DecreaseItem(cartItem)}>-</button>
            
            <div className = "amount">{cartItem.qty}</div>
            <div className = "productName">{cartItem.name}</div>

            <div className = "productPrice">{cartItem.price}</div>
            <div className = "productTotal">{cartItem.qty}</div>
                
        
        </div>
         
    )
}

export default GenerateCart;
