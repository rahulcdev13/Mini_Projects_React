import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';

 
import { initializeApp } from "firebase/app"; 
// Your web app's Firebase configuration 
const firebaseConfig = {
  apiKey: "AIzaSyDKsf4j5SHxp177gPkJROf5qw2C_WbF_QY",
  authDomain: "react-chat-app-f2418.firebaseapp.com",
  databaseURL: "https://react-chat-app-f2418-default-rtdb.firebaseio.com",
  projectId: "react-chat-app-f2418",
  storageBucket: "react-chat-app-f2418.appspot.com",
  messagingSenderId: "753393112522",
  appId: "1:753393112522:web:7f1e581ca30be0391feb33",
  measurementId: "G-WKDTJC3WBV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
console.log(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter> <App /></BrowserRouter> 
  </React.StrictMode>
);
 
reportWebVitals();
