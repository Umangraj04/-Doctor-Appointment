import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';
import { AuthContextProvider } from './context/authContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <BrowserRouter>
   <AuthContextProvider>
   <ToastContainer 
    theme='dark'
    position='top-right'
    autoClose={3000}
    closeOnClick
    pauseOnHover={false}
   />
   <App />
   </AuthContextProvider>
   </BrowserRouter>
   
  
    
  </StrictMode>
)