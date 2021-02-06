import React from 'react'

import Navbar from '../.././components/Navbar/navbar'
import GenerateCart from '../.././components/CartProducts/cartProduct'
import './cart.css'

class Cart extends React.Component {
    render() {
        const {DeleteItem, AddItem , DecreaseItem, cartItems} = this.props;
        return (
            <div className="flexContainer">
                <Navbar amount = {cartItems.length} />              
                <div className="flexContainer">
                    {cartItems.map(cartItems =>  GenerateCart(cartItems.id, cartItems, AddItem, DecreaseItem, DeleteItem))}
                </div>
            </div> 
 
        );
    }
  }

  export default Cart;