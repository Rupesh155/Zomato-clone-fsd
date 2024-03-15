import React, { useEffect,useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Login from './Components/Login'
import Signup from './Components/SignUp'
import AddRestro from './Components/AddRestro'
import View from './Components/View'
import AddProducts from './Components/AddProduct'
import ViewFood from './Components/ViewFood'
import ViewCart from './Components/ViewCart'
import Success from './Components/Success'
import Cancel from './Components/Cancel'

const App = () => {
  let [login,SetLogin]=useState(null)
  useEffect(()=>{
   let isLoggedIn=    localStorage.getItem('userData')
   SetLogin(isLoggedIn)
     
  },[login])


  return (
    <div>
      <Routes>
        <Route path='/'       element={ <Home/>}  />
        <Route  path='/login'   element={<Login/>}/>
        <Route  path='/signup'   element={<Signup/>}/>
        <Route  path='/addr'   element={login?<AddRestro/>:<Home/>}/>
        <Route  path='/view'   element={<View/>}/>
        <Route  path='/sucess'   element={login? <Success/>:<Login/>}/>
        <Route  path='/cancel'   element={login?<Cancel/>:<Login/>}/>
        <Route  path='/ViewCart/:restroId'   element={login?<ViewCart/>:<Login/>}/>
        <Route  path='/view/:restroId/product'   element={<ViewFood/>}/>
        <Route  path='/view/:restroId/addProduct'   element={login?<AddProducts/>:<Login/>}/> 
      </Routes>

    </div>
  )
}

export default App

// // App.js
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import PrivateRoute from './Components/PrivateRoutes';
// import Home from './Components/Home';
// import Login from './Components/Login';
// import Signup from './Components/SignUp';
// import AddRestro from './Components/AddRestro';
// import View from './Components/View';
// import AddProducts from './Components/AddProduct';
// import ViewFood from './Components/ViewFood';
// import ViewCart from './Components/ViewCart';
// import Success from './Components/Success';
// import Cancel from './Components/Cancel';

// const App = () => {
//   return (
   
//       <Routes>
//         <Route path='/' element={<Home />} />
//         <Route path='/login' element={<Login />} />
//         <Route path='/signup' element={<Signup />} />
//         <PrivateRoute path='/addr' element={<AddRestro />} />
//         <PrivateRoute path='/view' element={<View />} />
//         <PrivateRoute path='/success' element={<Success />} />
//         <PrivateRoute path='/cancel' element={<Cancel />} />
//         <PrivateRoute path='/ViewCart/:restroId' element={<ViewCart />} />
//         <PrivateRoute path='/view/:restroId/product' element={<ViewFood />} />
//         <PrivateRoute path='/view/:restroId/addProduct' element={<AddProducts />} />
//       </Routes>
  
//   );
// };

// export default App;
