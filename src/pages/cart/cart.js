import React from 'react'
import { NavLink } from 'react-router-dom'


import Navbar from '../.././components/Navbar/navbar'
import GenerateCart from '../.././components/CartRow/cartRow'
//import PageTitle from '../.././components/PageTitle/pagetitle'
import CheckSum from '../.././components/CheckSum/checksum'
import './cart.css'

class Cart extends React.Component {
    render() 
    {
        const {DeleteItem, AddItem , DecreaseItem, cartItems} = this.props;
        //console.log(cartItems);
        return (
            <div className="gridContainer">
                <div className = "navbar">
                    <Navbar amount = {cartItems.length} />
                </div>
                {cartItems.length > 0 ?
                    <>
                        <div className = "flexContainer">
                            {cartItems.map(cartItems =>  GenerateCart(cartItems.name, cartItems, AddItem, DecreaseItem, DeleteItem))}
                        </div>
                        <div className = "purchaseButton">
                            {<NavLink to = "/checkout">
                                <button>Jetzt Kaufen &#10132;</button>
                            </NavLink>}
                        </div>
                        <div className = "sumField">
                            <CheckSum cartItems = {cartItems} />
                        </div>
                    </>
                    :
                    <>
                    <div className = "noEntry"><h1>Noch keine Elemente im Warenkorb! Füg doch welche hinzu &#128512;</h1></div> 
                    </>
                }
                
            </div> 
 
        );
    }
  }

  export default Cart;