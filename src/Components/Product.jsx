import React from 'react';
import { useStateValue } from './Stateprovider';
import "./product.css";

function Product({title,price,image}) {
  const [{cart},dispatch] = useStateValue();
 
  const addToCart=()=>{
    dispatch({
      type:'ADD_TO_CART',
      item:{
        title:title,
        image: image,
        price:price
      }
    });

  }
  return (
    <div className='product'>
       <div className="product_info">
        <p className="product_price">
            <p>{title}</p>
            <small>$</small>
            <strong>{price}</strong>
        </p>
        <div className="product_rating">
            <p></p>
        </div>
       </div>
       <img src={image} alt="" />
    <button onClick={addToCart}>Add To Cart</button>
    </div>
  )
}

export default Product;