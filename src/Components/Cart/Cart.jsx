import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    return (
        <div>
            <h4>Selected Items: {cart.length}</h4>
        </div>
    );
};

export default Cart;