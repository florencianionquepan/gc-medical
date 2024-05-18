import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { App } from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { MaintenancePage } from './temporary/MaintenancePage.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <MaintenancePage/>
    </React.StrictMode>
  </BrowserRouter>
)
