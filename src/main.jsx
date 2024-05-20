import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './assets/components/Home.jsx'
import Quote from './assets/components/Quote.jsx'
import { Contact } from './assets/components/Contact.jsx'
import Restaurants from './assets/components/Restaurants.jsx'
import Foods from './assets/components/Foods.jsx'
import { Error } from './assets/components/Error.jsx'
import FoodItem from './assets/components/FoodItem.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const renderFunction = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children : [
      {
        path : "/",
        element : <Home />
      },
      {
        path : "/quote",
        element : <Quote />
      },
      {
        path : "/restaurants",
        element : <Restaurants />
      },
      {
        path : "/foods",
        element : <Foods />,
        
      },
      {
        path : "/foodItems/:foodId",
        element : <FoodItem />
      },
      {
        path : "/contact",
        element : <Contact />
      },
    ]
    // errorElement : <Error />
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={renderFunction} ></RouterProvider>
)
