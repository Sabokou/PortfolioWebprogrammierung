import React from 'react';

import GenerateProducts from '../.././components/Products/Product'
import productlist from '../.././components/Products/productlist'
import Navbar from '../.././components/Navbar/navbar'

import './home.css';





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