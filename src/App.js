// import './App.css';
// import Header from "./Components/Header"
// import { Switch } from '@mui/material';
// import Home from "./Components/Home"

// import { BrowserRouter as Router , Route, Routes } from 'react-router-dom';
// function App() {
//   return (
//    <Router>
//     <div className='App'>
//       <Switch>
//         <Route path='/'>
//           <Header/>
          
//         </Route>
//         <Route path='/'>
//           <Header/>
//           <Home/>
//         </Route>
//       </Switch>
//     </div>
//    </Router>
 
//   );
// }

// export default App;
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Checkout from "./Components/Checkout";
import Header from "./Components/Header";
import Home from "./Components/Home";
import { auth } from './firebase';

import { Payment } from '@mui/icons-material';
import { useEffect } from 'react';
import Loginn from './Components/Loginn';
import { useStateValue } from './Components/Stateprovider';

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentPage from './Components/PaymentPage';

const promise = loadStripe('pk_test_51NIOP6SCrdLU0oeZiqJdCfhyy4quK78XII6HEcJJTNgggE27dNxJ119toAMrh0QTKRgMQcWqzT7wT7uuwqp2dT1c00LKemBqgN')

function App() {
  const [{} ,dispatch] = useStateValue();
  useEffect(()=>{
    auth.onAuthStateChanged(authUser=>{
      console.log('the user is >>>>',authUser);
      if(authUser){
       dispatch({
        type: 'SET_USER',
        user:authUser
       })
      }else{
      dispatch({
        type:'SET_USER',
        user: null
      })
      }
    })
  },[])
  return (
  <Router>
      <div className='App'>
        <Header/>
     
         
         
         <Routes>
         <Route path='/login' element={<Loginn/>}  />
        <Route path='/Checkout' element={<Checkout/>}  />
        

        {/* <Route path='/Payment' element={<><PaymentPage/><Elements stripe={promise}  /> <Payment/> </>}  /> */}
        <Route path='/Payment' element={  <Elements stripe={promise}> <PaymentPage/> </Elements> }  />
        <Route path='/' element={<Home/>} />
        {/* <Route path='/Payment'>0
          
          <Elements stripe={promise}>

          <Payment/>
          </Elements>
          <Payment/>
          
        </Route> */}
      
      </Routes>
         
       
      </div>
      </Router>
  
  );
}

export default App;

