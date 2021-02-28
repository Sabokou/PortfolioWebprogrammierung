import React, {useState } from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";

//import Products from'./components/Products/Products';
import productlist from './components/Products/productlist'

import './App.css';

import Homepage from './pages/home/home';
import Checkout from './pages/checkout/checkout';
import Cart from './pages/cart/cart';



function App () {
  
  //mapping productlist locally to different variable
  const {product} = productlist
  
  //iniitialisiing state for cartItems
  const [cartItems, setCartItems] = useState([]);
  
  
  const AddToCart = (product) => {
    
    //console.log("Adding item:", product.id)
    
    //returns item if product id in cart
    const exist = cartItems.find((x) => x.id === product.id);
    //gets current quantitiy of a given product 
    let amount = document.getElementById(product.name).value;
    
    //checks if product is in cart
    if (exist){
      setCartItems(
        cartItems.map((x) =>
        //initialises initially the amount based on input field value
        x.id === product.id ? { ...exist, qty: parseInt(exist.qty)+parseInt(amount) } : x
        )
      );
    } else {
      //defaults to quantitiy of 1
      setCartItems([...cartItems, {...product, qty: (amount? amount : 1)}])
    }
  };

  const IncreaseItemCount = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    
    //increases quantitiy
    setCartItems(
      cartItems.map((x) =>
      x.id === product.id ? { ...exist, qty: parseInt(exist.qty)+parseInt(1) } : x
      )
    );
  };

  const ReduceItemCount = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    
    //if quantitiy would be set to 0 or below product is removed from cart
    if (exist.qty <= 1){
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
        x.id === product.id ? { ...exist, qty: parseInt(exist.qty)-parseInt(1) } : x
        )
      );
    } 
  };

  const DeleteItem = (product) => {
    //removes a single product from the cart
    const exist = cartItems.find((x) => x.id === product.id);
    setCartItems(cartItems.filter((x) => x.id !== product.id));
  };

  const DeleteAll = (product) => {
    //since all cart items are filtered when condition is false all entries are removed
    setCartItems(cartItems.filter((x) => false))
  };
  
  //rendered in Router to be able to switch between pages
  return (
    <Router>
      <Route path='/' exact component = {(props) => <Homepage {...props} countCartItems={cartItems.length} AddToCart={AddToCart}/> }/>
      <Route path='/cart' exact component = {(props) => <Cart {...props} DeleteItem={DeleteItem} AddItem={IncreaseItemCount} DecreaseItem = {ReduceItemCount} cartItems={cartItems}/>}/>
      <Route path='/checkout' exact component = {(props) => <Checkout {...props} cartItems={cartItems} DeleteAll = {DeleteAll}/>}/>
    </Router>
  );
}

export default App;
