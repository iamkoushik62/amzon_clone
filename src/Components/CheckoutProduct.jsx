import React, { useState } from 'react'
import "./CheckoutProduct.css"
import { useStateValue } from './Stateprovider'

function CheckoutProduct({image,title,price}) {
const [{cart},dispatch] = useStateValue();
    const removeFromCart=()=>{
        dispatch({
            type:"REMOVE_FROM_CART",
            price:price,
            image:image,
            title:title
        })
    }
  return (
    <div className='checkoutproduct'>

       <img className='checkoutproduct_image' src={image} alt="" /> 
       <div className="checkoutproduct_info">
        <p className="checkoutproduct_title">{title}</p>
        <p className="checkoutproduct_price">
        <small>$</small>
        <strong>{price}</strong>
        </p>
        <button onClick={removeFromCart}>Remove to cart</button>
       </div>
    </div>
  )
}

export default CheckoutProduct;
