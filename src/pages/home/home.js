import React from 'react';
import {BrowserRouter as Router, Route, NavLink} from "react-router-dom";

import './home.css';

import GenerateProducts from '../.././components/Products/Product'
import productlist from '../.././components/Products/productlist'
import Navbar from '../.././components/Navbar/navbar'



class Homepage extends React.Component {
    render() {
        const {countCartItems, AddToCart} = this.props;
        return (
            <div className="flexContainer">
                <Navbar amount = {countCartItems} />              
                <div className="flexContainer">
                    {productlist.map(productlist =>  GenerateProducts(productlist.id, productlist, AddToCart))}
                </div>
            </div> 
 
        );
    }
  }

  export default Homepage;