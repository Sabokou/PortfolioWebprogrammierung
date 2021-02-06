//import Products from '../.././components/Products/Product'
import './checkout.css'

import React from 'react';
import {BrowserRouter as Router, Route, NavLink} from "react-router-dom";



class Checkout extends React.Component {
    render() {
        const {cartItems} = this.props;
        console.log("checkout opened")
        return (
            <div className="flexContainer">              
                <div className="flexContainer">
                    {productlist.map(productlist =>  GenerateProducts(productlist.id, productlist, AddToCart))}
                </div>
            </div> 
 
        );
    }
  }

  export default Checkout;