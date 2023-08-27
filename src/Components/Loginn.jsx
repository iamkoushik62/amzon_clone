import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';

import { auth } from "../firebase";
import "./loginn.css";

function Loginn() {
  const [email,setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const signin = e =>{
    e.preventDefault();
    auth 
    .signInWithEmailAndPassword(email,password).then(auth=>{
      navigate('/')
    }).catch(error=>alert(error.message))
  }
  const register = e =>{
    e.preventDefault()
    auth
    .createUserWithEmailAndPassword(email,password).then((auth) =>{
      if(auth){
        navigate('/')
      }
    }).catch(error=>alert(error.message))
  }

  return (
    
  <div className='login'>
    <Link>
      <img className='login_logo' src="https://www.freepnglogos.com/uploads/amazon-png-logo-vector/woodland-gardening-amazon-png-logo-vector-8.png" alt="" />
      </Link>
  
   <div className="login_container">
    <h1>Sign In</h1>
    <form>
   <h5>E-mail</h5>
   <input type="text"  value={email} onChange={e=>setEmail(e.target.value)}/>
   <h5>Password</h5>
   <input type="password" value={password} onChange={e=>setPassword(e.target.value)}/> 
    <button className='Signin_button' type='submit' onClick={signin}>Sign In</button>
   </form>
   <p>This is the fake amazon clone. This is use for some knowledge in reactjs and its have many function in reactjs thats are to included in this fake amazon clone</p>
   <button className='newaccount_button' onClick={register}>Create your amazon account</button>
   </div>
   
    </div>
  )
}

export default Loginn;