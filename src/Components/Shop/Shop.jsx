import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';
import '../Cart/Cart'
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';

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
    addToDb(product.id)
  };

 useEffect(()=>{
  const storeCart = getShoppingCart();
  const saveCart = [];
  // step 1 get id from storeCart
  for(const id in storeCart){
    // step 2 get product by using id
    const adededProduct = products.find(product=>product.id === id);
    // step 3 get quantity
    if(adededProduct){
      const quantity = storeCart[id];
    adededProduct.quantity = quantity;
    //step 4 add the saveCart
    saveCart.push(adededProduct)
    }
  }
  // setCart
  setCart(saveCart)
 },[products])

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