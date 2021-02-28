import React from 'react';
import { NavLink } from 'react-router-dom';

import './navbar.css'

//creates the design component navbar with cart button and link back to the home page 
function Navbar (countCartItems) {
    
    
    let itemCount = countCartItems["amount"]

    return (<div className = "navbarGrid">
                    <NavLink to = '/'><h1 className = "gridTitel">Kabelsalat</h1></NavLink>
                    <NavLink to='/cart' className = "gridCart">&#128722;({ itemCount })</NavLink>
                </div>)
   
};

export default Navbar;