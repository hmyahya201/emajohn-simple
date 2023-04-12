import React from 'react';
import './Product.css';

const Product = ({product, addToCart}) => {
    const {img, name, seller, price, quantity, ratings} = product
    return (
        <div className='product'>
            <img src={img} alt="product img" />
            <div className='product-info'>
                <h3 className='product_name'>{name}</h3>
                <p>Price: ${price}</p>
                <p>Manufactuarer: {seller} </p>
                <p>Ratings: {ratings} star</p>
            </div>
            <button className='btn-add-cart' onClick = {()=>addToCart(product)}>Add to Cart</button>
        </div>
    );
};

export default Product;