import App from './App';
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from "react-hot-toast"
import UserProvider from './contexts/userContext';
import { AnimatePresence } from 'framer-motion'
import ChatProvider from './contexts/chatContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <AnimatePresence>
        <ChatProvider>
          <UserProvider>
              <Toaster />
              <App />
          </UserProvider>
        </ChatProvider>
      </AnimatePresence>
    </BrowserRouter>
  </React.StrictMode>
)
