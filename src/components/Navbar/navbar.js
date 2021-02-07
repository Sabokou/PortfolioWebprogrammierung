import React from 'react';
import { NavLink } from 'react-router-dom';

import './navbar.css'

function Navbar (countCartItems) {
    let itemCount = countCartItems["amount"]

    return (<div className = "navbarGrid">
                    <NavLink to = '/'><h1 className = "gridTitel">Kabelsalat</h1></NavLink>
                    <NavLink to='/cart' className = "gridCart">Warenkorb ({ itemCount })</NavLink>
                </div>)
   
};

export default Navbar;