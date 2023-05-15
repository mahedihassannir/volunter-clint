import React from 'react'
import ReactDOM from 'react-dom/client'
import ReactDOM from "react-dom/client";
import './index.css'
import router from './Components/Router/router';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <RouterProvider router={router} />

  </React.StrictMode>,
)
