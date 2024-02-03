import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Landing from './Landing/Landing.jsx';
import Home from './Home/Home.jsx';
import Featurejobs from './Featurejobs/Featurejobs.jsx';
import Jobcard from './Jobcard/Jobcard.jsx';
import Jobdetails from './Jobdetails/Jobdetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing/>,
    children: [
      {
        path: "/",
        element: <Home/>,
        loader: ()=>fetch('categories.json'),
      },
      {
        path: "jobDetails",
        element: <Jobdetails/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
