import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CurrencyFormat from 'react-currency-format';
import { Link, useNavigate } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import "./PaymentPage.css";
import { useStateValue } from './Stateprovider';
import { getcartTotal } from './reducer';


function PaymentPage() {
  const [{ cart,user}, dispatch] = useStateValue();
  const navigate =  useNavigate();
  const stripe = useStripe();
  const elements = useElements();
  const [error,setError] = useState(null);
  const[disable,setDisable] = useState(true);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setprocessing] = useState(true);
  const [clientScreat, setClientScreat] = useState(true);


// useEffect(()=>{
//    const getClientScreat = async()=>{
// const response = await axios({
//   method: 'post',
//   url: '/payments/create?total = ${getcartTotal(cart)*100}'
// });
// setClientScreat(response.data.clientScreat)
//    }
//    getClientScreat();
// },[cart])
useEffect(() => {
  const getClientSecret = async () => {
    try {
      const response = await axios.post('/payments/create', {
        total: getcartTotal(cart) * 100,
      });
 
      const clientSecret = response.data.clientSecret;
      
    } catch (error) {
      console.error('Error fetching client secret:', error);
    }
  };

  getClientSecret();
}, [cart]);
console.log('the screat key is,',clientScreat)
   
  const handleSubmit =async event =>{
          event.preventDefault();
          setprocessing(true);
          const playload = await stripe.confirmCardPayment(clientScreat,{payment_method:{
            card: elements.getElement(CardElement)
          }}.then(({paymentIntent})=>{
            setSucceeded(true);
            setError(null);
            setprocessing(false)
            navigate('/order')
          }))
  }
  const handleChange = event=>{
    setDisable(event.empty);
    setError(event.error ? event.error.message : "");
  }
  return (
    <div className='payment'>
        <div className="payment_container">
          <h1>Checkout(
            <Link to='/checkout'>
            {cart?.length}items
            </Link>
            )</h1>
            {/* {} */}
            <div className="payment_section">
                <div className="payment_title">
              <h2>Delivery Address : </h2>
                </div>
                <div className="payment_address">
                  <p>{user?.email}</p>
                </div>
            </div>
            {/* {} */}
            <div className="payment_section">
              <div className="payment_title">
                <h3>Review Items and delivery</h3>
                {/* <h3>Payment Menthod</h3> */}
                
              </div>
           <div className="payment_items">
            {cart.map(item=>(
              <CheckoutProduct
               title={item.title}
               image={item.image}
               price={item.price}
              />
            ))}
           </div>
            </div>
            
            <div className="payment_section">
              <div className="payment_title">
              <h3>Payment Method</h3>
              </div>
              <div className="payment_details">
              <form onSubmit={handleSubmit} >
                  <CardElement onChange={handleChange}/>
                  <div className="paymentprice_container">
                  <CurrencyFormat
          renderText={(value)=>(
            <h3>OrderTotal : {value}</h3>
          )}
          decimalScale={2}
          value={getcartTotal(cart)}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
          >
         
        </CurrencyFormat>
        <button disabled={processing || disable || succeeded}>
          <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
        </button>
                </div>
                {error && <div>{error}</div>}
                </form>
              </div>
            
                
            </div>
        </div>
    </div>
  )
}

export default PaymentPage;