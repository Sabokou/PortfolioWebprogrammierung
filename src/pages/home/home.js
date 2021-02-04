import React from 'react';
import {BrowserRouter as Router, Route, NavLink} from "react-router-dom";

import './home.css';
//import '../Seitenuebergreifende_Elemente/layout.css';
import generate_products from '../.././components/Products/Product'
import productlist from '../.././components/Products/productlist'




class Homepage extends React.Component {
    render() {
        const {AddToCart, countCartItems} = this.props;
        console.log("home called")
        return (
            <div className="flexContainer">              
                <div class="flexContainer">
                    {productlist.map(Name =>  generate_products(Name.id, Name, AddToCart))}
                </div>
            </div> 
 
        );
    }
  }

  export default Homepage;