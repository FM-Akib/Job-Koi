import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Landing from './Landing/Landing.jsx';
import Home from './Home/Home.jsx';
import Jobdetails from './Jobdetails/Jobdetails.jsx';
import Appliedjobs from './Appliedjobs/Appliedjobs.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "jobDetails/:id",
        element: <Jobdetails/>,
        loader: ()=>fetch('jobs.json'),
      },
      {
        path: "appliedjobs",
        element: <Appliedjobs/>,
        loader: ()=>fetch('jobs.json'),
       
       
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
