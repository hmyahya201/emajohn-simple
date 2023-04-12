import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';
import '../Cart/Cart'
import Cart from '../Cart/Cart';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
  useEffect(()=>{
    fetch('products.json')
    .then(res => res.json())
    .then(data=>setProducts(data))
  }, []);

  const addToCart = (product)=>{
    const newCart = [...cart, product];
    setCart(newCart)
  }
    return (
        <div className = "shop-container">
            <div className="products-container">
                {
                    products.map(product=><Product
                         key={product.id}
                         product = {product}
                         addToCart = {addToCart}
                         />)
                }
                
            </div>
            <div className="cart-container">
                <Cart cart = {cart}/>
            </div>
            
        </div>
    );
};

export default Shop;