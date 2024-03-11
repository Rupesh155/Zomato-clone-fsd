import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
// pk_test_51Os8E4SEhF2ghQp3XHXBDJU6mg4MgQvqxMyH9zs14Wroo0geX7yNvfQuqwdIjNC3xQk5DUZZUE2b69BXTH9AaGfL00vBl5hq9k
const stripePromise = loadStripe('pk_test_51Os8E4SEhF2ghQp3XHXBDJU6mg4MgQvqxMyH9zs14Wroo0geX7yNvfQuqwdIjNC3xQk5DUZZUE2b69BXTH9AaGfL00vBl5hq9k');
const root = ReactDOM.createRoot(document.getElementById('root'));
let user='hello'
root.render(
 

    <BrowserRouter>

      <App />
   
    </BrowserRouter>

  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

