import React from 'react';
import {NavLink} from "react-router-dom";

import CartProducts  from '../.././components/CartProducts/cartProducts'
import Navbar from '../.././components/Navbar/navbar'

import './checkout.css'

function Clicked(DeleteAll) {
    DeleteAll();
    alert("Kauf erfolgreich.\nKehre zur Startseite zurück.")
};

function CheckEntries(DeleteAll){
    console.log();
};

class Checkout extends React.Component {
    
      
    render() {
        const {cartItems, DeleteAll} = this.props;
        console.log("checkout opened")
        return (
            <div className="gridContainer"> 
                <div className = "navbar">
                    <Navbar amount = {cartItems.length} />
                </div>
                <div className = "gridContainer-subgrid column1"></div>
                    <input className = "row1 column1" id = "input1" placeholder = "Nachmname" />
                    <input className = "row1 column1" id = "input2" placeholder = "Vorname" />
                    <input className = "row2 column1" id = "input3" placeholder = "Straße" />
                    <input className = "row2 column2" id = "input4" type = "number" min = "1" placeholder = "Hausnummer" />
                    <input className = "row3 column1" id = "input5" placeholder = "PLZ"/>
                    <input className = "row3 column2" id = "input6" placeholder = "Ort"/>
                    <input className = "row4 columnspan" id = "input7" type = "email" />

                <div className = "gridContainer-subgrid column2">
                    <div className = "products">
                        {cartItems.map(cartItems =>  CartProducts(cartItems.id, cartItems))}
                    </div>
                    <NavLink to = "/"><button onClick = {() => Clicked(DeleteAll)}>Jetzt Kaufen!</button></NavLink>
                </div>
                    
            </div> 
 
        );
    }
  }

  export default Checkout;