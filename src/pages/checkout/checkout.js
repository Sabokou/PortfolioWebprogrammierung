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
    
    //function to check if all entries are present
    CheckEntries(DeleteAll){
       
        let correct = [];
    
        //iterate through all indexes of input fields
        for (let index = 1; index < 8; index++){
            

            //fetch value of html input field
            let str = "input".concat(index.toString());
            let value = document.getElementById(str).value;
            
            //checks if value is present
            if ( value === "" ) {
                correct.push("false")
            } else {
                correct.push("true")
            }
            
        }
        //given that correct only has "true" entries it deletes all entries from cart and alerts user of success
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

     //used in conjunction with CheckEntries to move user to different page on success
    registerSubmit(DeleteAll) {
        if (this.CheckEntries(DeleteAll)) {
            this.props.history.push('/');
        }
    };

    render() {
        //unpacking props
        const {cartItems, DeleteAll} = this.props;
        console.log("checkout opened")
        return (
            <div className="flexContainer"> 
                <div className = "navbar">
                    <Navbar amount = {cartItems.length} />
                </div>
                <div className = "gridContainer-subgrid-entry">
                    <input className = "row1 column1" id = "input1" placeholder = "Nachname" />
                    <input className = "row1 column2" id = "input2" placeholder = "Vorname" />
                    <input className = "row2 column1" id = "input3" placeholder = "Straße" />
                    <input className = "row2 column2" id = "input4" type = "number" min = "1" placeholder = "Hausnummer" />
                    <input className = "row3 column1" id = "input5" type = "number" placeholder = "PLZ"/>
                    <input className = "row3 column2" id = "input6" placeholder = "Ort"/>
                    <input className = "row4 columnspan" id = "input7" type = "email" placeholder = "Email"/>
                </div>
                <div className = "gridContainer-subgrid-products">
                    <div className = "products">
                        {cartItems.map(cartItems =>  CartProducts(cartItems.id, cartItems))}
                    </div>
                    <button className = "button" onClick = {() => this.registerSubmit(DeleteAll)}>Jetzt Kaufen!</button>
                </div>
                    
            </div> 

        );
    }
};
//withRouter used to be able to move user in with react code
export default withRouter(Checkout);