import React from 'react';
import {NavLink} from "react-router-dom";

import GenerateCart from '../.././components/CartProducts/cartProduct'
import Navbar from '../.././components/Navbar/navbar'

import './checkout.css'

function Clicked(DeleteAll) {
    DeleteAll();
    alert("Kauf erfolgreich.\nKehre zur Startseite zurück.")
};

class Checkout extends React.Component {
    
    render() {
        const {cartItems, DeleteAll} = this.props;
        console.log("checkout opened")
        return (
            <div className="flexContainer"> 
                <Navbar amount = {cartItems.length} />             
                <div className="flexContainer">
                    {cartItems.map(cartItems =>  GenerateCart(cartItems.name, cartItems, 0, 0 ,0))}
                </div>
                <NavLink to = "/"><button onClick = {() => Clicked(DeleteAll)}> DELETE </button></NavLink>
            </div> 
 
        );
    }
  }

  export default Checkout;