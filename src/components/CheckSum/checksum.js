import React from 'react';

import './checksum.css'

function CheckSum({cartItems}) {
    //console.log(cartItems);
    let sum = cartItems.reduce((total,item) => total + parseFloat(item.price.substring(0, item.price.length - 1)) * item.qty,0);
    //console.log(sum)
    //cartItems.forEach(item => console.log(item.price));
    return (
        <div className = "sumField box">
           Gesamt: {sum}&euro; 
        </div>
    )
}

export default CheckSum;