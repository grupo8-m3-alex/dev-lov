import App from './App';
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from "react-hot-toast"
import UserProvider from './contexts/userContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <Toaster />
        <App />
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
)
