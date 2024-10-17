import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Storecontextprovider from './Context/StoreContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Storecontextprovider>
        <App />
      </Storecontextprovider>
    </BrowserRouter>
  </React.StrictMode>
)
