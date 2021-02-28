import React from 'react';

import CartProducts from '../CartProducts/cartProducts'

import './cartRow.css';



function GenerateCart(key, cartItem, AddItem, DecreaseItem, DeleteItem) {
    //console.log("Called Generate cart with ID:", key, "Price of Item:", cartItem.price)
    //console.log("GC-Item", cartItem)
    //console.log(cartItem.qty)
    
    //generates CartProducts div beforehand to embed later
    let productsDiv = CartProducts(cartItem.id, cartItem)

    /*  
        adds buttons to increment / decrement / remove item in cart 
        appends the products div on the right side of row  
    */
    return (
        <div className="productRow">
            <button className = "button margins border delete" onClick = {() => DeleteItem(cartItem)}>X</button>
            <button className = "button margins border add" onClick = {() => AddItem(cartItem)}>+</button>
            <button className = "button margins border subtract" onClick = {() => DecreaseItem(cartItem)}>-</button>
            <div className = "productDetails border">
                {productsDiv}
            </div>                
        
        </div>
         
    )
}

export default GenerateCart;
