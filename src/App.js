import React from 'react';
import {BrowserRouter as Router, Route, NavLink} from "react-router-dom";

import Products from'./components/Products/Products';


import styles from './App.css';
import './pages/cart/cart';
import './pages/checkout/checkout';
import './pages/home/home';

const App = () => {
  return (
    <div className={styles.flexContainer}>
      <Products />
    </div>
  );
}

export default App;
/*
<Router>
      <Route path='/' exact component = {home}/>
      <Route path='/cart' exact component = {cart}/>
      <Route path='/checkout' exact component = {checkout}/>
    </Router>*/