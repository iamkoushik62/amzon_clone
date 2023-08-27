import React from 'react'
import "./Checkout.css"
import Subtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './Stateprovider';



function Checkout() {
  const [{cart ,user} , dispatch] = useStateValue();
  return (
   <div className='Checkout'>
    <div className="checkout_left">
      <img src="https://img.freepik.com/free-vector/flat-horizontal-sale-banner-template-with-photo_23-2149000923.jpg?w=1380&t=st=1691293174~exp=1691293774~hmac=f618d17e9e4298509a862c42d040ad7fde35d9480e5031f790d1161de2550723" alt="" className="checkout_ad" />
      <div >
        <h3>{user?.email}</h3>
    <h2 className="checkout_title">
      Your Shopping Cart
    </h2>
    {cart.map(item=>(
      <CheckoutProduct
      title={item.title}
      price={item.price}
      image={item.image}
      ></CheckoutProduct>
    ))}
    </div>
    </div>
   <div className="checkout_right">
    <Subtotal />
   </div>
   </div>
    
  )
}

export default Checkout;