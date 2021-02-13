import React from 'react'

import './cartProducts.css'

function CartProducts(key, item) {
    return (
        <div className = "grid-container">
            <div className = "amount">{item.qty}x</div>
            <div className = "productPrice">{item.price}</div>
            
            <div className = "productName">{item.name}</div>
            <div className = "productTotal">&#931; {(item.qty * parseFloat(item.price.substring(0, item.price.length - 1))).toFixed(2)}€</div>
        </div>
    )
}

export default CartProducts