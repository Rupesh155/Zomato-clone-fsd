import React from 'react'
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
  return (
    <div>
      <Routes>
        <Route path='/'       element={<Home/>}  />
        <Route  path='/login'   element={<Login/>}/>
        <Route  path='/signup'   element={<Signup/>}/>
        <Route  path='/addr'   element={<AddRestro/>}/>
        <Route  path='/view'   element={<View/>}/>
        <Route  path='/sucess'   element={<Success/>}/>
        <Route  path='/cancel'   element={<Cancel/>}/>
        <Route  path='/ViewCart/:restroId'   element={<ViewCart/>}/>
        <Route  path='/view/:restroId/product'   element={<ViewFood/>}/>
        <Route  path='/view/:restroId/addProduct'   element={<AddProducts/>}/> 
      </Routes>

    </div>
  )
}

export default App


// import React from 'react';
// import { Routes ,Route} from 'react-router-dom';
// import AuthRoute from './Components/AuthRout'
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
//     <div>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         <AuthRoute path="/addr" element={<AddRestro />} />
//         <AuthRoute path="/view" element={<View />} />
//         <AuthRoute path="/success" element={<Success />} />
//         <AuthRoute path="/cancel" element={<Cancel />} />
//         <AuthRoute path="/ViewCart" element={<ViewCart />} />
//         <AuthRoute path="/view/:restroId/product" element={<ViewFood />} />
//         <AuthRoute path="/view/:restroId/addProduct" element={<AddProducts />} />
//       </Routes>
//     </div>
//   );
// };

// export default App;



