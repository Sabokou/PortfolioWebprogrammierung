import React, {useState } from 'react';
import {BrowserRouter as Router, Route, NavLink} from "react-router-dom";

//import Products from'./components/Products/Products';
import productlist from './components/Products/productlist'

import './App.css';

import Homepage from './pages/home/home';
import Checkout from './pages/checkout/checkout';
import Cart from './pages/cart/cart';



function App () {
  
  const {product} = productlist
  const [cartItems, setCartItems] = useState([]);
  
  
  const AddToCart = (product) => {
    
    console.log("Adding item:", product.id)
    
    const exist = cartItems.find((x) => x.id === product.id);
    let amount = document.getElementById(product.name).value;
    
    console.log(amount);
    
    if (exist){
      setCartItems(
        cartItems.map((x) =>
        x.id === product.id ? { ...exist, qty: parseInt(exist.qty)+parseInt(amount) } : x
        )
      );
    } else {
      setCartItems([...cartItems, {...product, qty: (amount? amount : 1)}])
    }
  };

  const IncreaseItemCount = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    setCartItems(
      cartItems.map((x) =>
      x.id === product.id ? { ...exist, qty: parseInt(exist.qty)+parseInt(1) } : x
      )
    );
  };

  const ReduceItemCount = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    
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
    const exist = cartItems.find((x) => x.id === product.id);
    setCartItems(cartItems.filter((x) => x.id !== product.id));
  };

  const DeleteAll = (product) => {
    setCartItems(cartItems.filter((x) => x.id !== x.id))
  };
  
  return (
    <Router>
      <Route path='/' exact component = {(props) => <Homepage {...props} countCartItems={cartItems.length} AddToCart={AddToCart}/> }/>
      <Route path='/cart' exact component = {(props) => <Cart {...props} Delete={DeleteItem} AddItem={IncreaseItemCount} DecreaseItem = {ReduceItemCount} cartItems={cartItems}/>}/>
      <Route path='/checkout' exact component = {(props) => <Checkout {...props} cartItems={cartItems}/>}/>
    </Router>
  );
}

export default App;
