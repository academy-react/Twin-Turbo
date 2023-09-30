import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './app/App.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import './index.css'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
    {
      path : '/',
      element : <Header />
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
