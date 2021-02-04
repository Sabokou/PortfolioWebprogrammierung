import React from 'react';
import {BrowserRouter as Router, Route, NavLink} from "react-router-dom";

import './home.css';

import GenerateProducts from '../.././components/Products/Product'
import productlist from '../.././components/Products/productlist'




class Homepage extends React.Component {
    render() {
        const {AddToCart, countCartItems} = this.props;
        console.log("home called")
        return (
            <div className="flexContainer">              
                <div className="flexContainer">
                    {productlist.map(productlist =>  GenerateProducts(productlist.id, productlist, AddToCart))}
                </div>
            </div> 
 
        );
    }
  }

  export default Homepage;