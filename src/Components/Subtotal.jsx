import React, { useState } from 'react';
import CurrencyFormat from 'react-currency-format';
import "./Subtotal.css";
import { useStateValue } from './Stateprovider';
import { getcartTotal } from './reducer';
import { Navigate, useNavigate } from 'react-router-dom';

function Subtotal() {
    const [{cart}, dispatch] = useStateValue();
    const navigate = useNavigate();
  return (
  
    <div className='subtotal'>

        <CurrencyFormat
          renderText={(value)=>(
            <>
            <p>
                Subtotal ({cart.length} items):
                <strong>{value}</strong>
            </p>
            <small className='subtotal_gift'>
                <input type="Checkbox" />
                This Order Contains a Gift
            </small>
            </>
          )}
          decimalScale={2}
          value={getcartTotal(cart)}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
          >

        </CurrencyFormat>
        <button onClick={e=>navigate('/Payment')}>Proceed to checkout</button>
    </div>
  )
}

export default Subtotal;