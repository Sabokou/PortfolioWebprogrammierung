import React from 'react';
import { withRouter } from "react-router-dom";

import CartProducts  from '../.././components/CartProducts/cartProducts'
import Navbar from '../.././components/Navbar/navbar'

import './checkout.css'

function getAllIndexes(arr, val) {
    var indexes = [], i;
    for(i = 0; i < arr.length; i++)
        if (arr[i] === val)
            indexes.push(i+1);
    return indexes;
}



class Checkout extends React.Component {
    
    CheckEntries(DeleteAll){
        let correct = [];
    
        for (let index = 1; index < 8; index++){
            
            //fetch value of html input field
            let str = "input".concat(index.toString());
            let value = document.getElementById(str).value;
            
            if ( value === "" ) {
                correct.push("false")
            } else {
                correct.push("true")
            }
            
        }
        if ( correct.filter(x => x === "false").length === 0 ) {
            DeleteAll();
            alert("Kauf erfolgreich.\nKehre zur Startseite zurück.");
            return true;
        } else {
            console.log(correct);
            const str = "Fehlende Eingabe! Bitte Felder ".concat(getAllIndexes(correct, "false").join(), " überprüfen") 
            alert(str);
            return false;
        }
    };

    registerSubmit(DeleteAll) {
           
        if (this.CheckEntries(DeleteAll)) {
            this.props.history.push('/');
        }
    };

    render() {
        const {cartItems, DeleteAll} = this.props;
        console.log("checkout opened")
        return (
            <div className="flexContainer"> 
                <div className = "navbar">
                    <Navbar amount = {cartItems.length} />
                </div>
                <div className = "gridContainer-subgrid-entry row2 column1">
                    <input className = "row1 column1" id = "input1" placeholder = "Nachname" />
                    <input className = "row1 column1" id = "input2" placeholder = "Vorname" />
                    <input className = "row2 column1" id = "input3" placeholder = "Straße" />
                    <input className = "row2 column2" id = "input4" type = "number" min = "1" placeholder = "Hausnummer" />
                    <input className = "row3 column1" id = "input5" type = "number" placeholder = "PLZ"/>
                    <input className = "row3 column2" id = "input6" placeholder = "Ort"/>
                    <input className = "row4 columnspan" id = "input7" type = "email" placeholder = "Email"/>
                </div>
                <div className = "flexContainer-subgrid-products">
                    <div className = "products">
                        {cartItems.map(cartItems =>  CartProducts(cartItems.id, cartItems))}
                    </div>
                    <button onClick = {() => this.registerSubmit(DeleteAll)}>Jetzt Kaufen!</button>
                </div>
                    
            </div> 

        );
    }
};

export default withRouter(Checkout);