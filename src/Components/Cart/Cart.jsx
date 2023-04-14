import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    console.log(cart)
    let totalPrice = 0;
    let shipping = 0;
    let quantity = 0;
    for(const product of cart){
        // product.quantity = product.quantity || 1;
        totalPrice = totalPrice + product.price * product.quantity;
        shipping = shipping + product.shipping;
        quantity = quantity + product.quantity;
    };
    const tax = totalPrice*2/100.
    const grandTotal = totalPrice + shipping + tax;
    return (
        <div className='cart'>
            <h3>Order Summary</h3>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${totalPrice}</p>
            <p>Total Shipping: ${shipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h3>Grand Total: ${grandTotal.toFixed(2)}</h3>
        </div>
    );
};

export default Cart;