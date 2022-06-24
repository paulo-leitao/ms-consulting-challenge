import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Providers from './providers';
import { AuthContextProvider } from "./context/AuthContext";
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <Providers />
    </AuthContextProvider>
  </React.StrictMode>
)
