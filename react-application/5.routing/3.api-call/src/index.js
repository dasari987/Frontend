import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Home from './components/Home';
import Features from './components/Features';
import Ang from './components/features/Ang';
import Rea from './components/features/Rea';
import Pricing from './components/Pricing';
import Productsmaster from './components/Productsmaster';
import Productdetails from './components/Productdetails';
import Dukan from './components/Dukan';


const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: '/home',
        element: <Home></Home>,
      },
      {
        path: '/features',
        element: <Features></Features>,
        children: [
          {
            path: '/features/Ang',
            element: <Ang></Ang>
          },
          {
            path: '/features/Rea',
            element: <Rea></Rea>
          },
        ]
      },
      {
        path: '/pricing',
        element: <Pricing></Pricing>
      },
      {
        path:'/products',
        element: <Productsmaster></Productsmaster>
      },
      {
        path:'/productdetails/:id',
        element: <Productdetails></Productdetails>
      },
      {
        path: '/dukan',
        element: <Dukan></Dukan>
      }
    ]
  },
  
 
]);

root.render(

  <RouterProvider router={router} />
  
);


reportWebVitals()
