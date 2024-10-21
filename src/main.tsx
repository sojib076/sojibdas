/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import ReactDOM from 'react-dom/client';


import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Home from './Page/Home';
import BlogDetails from './components/Blog/blogDetails';
import Dashboard from './Page/Dashboard/Dashboard';
import Dashboardlayout from './components/Layout/DashboardLayout';
import Createblog from './Page/Dashboard/Createblog/Createblog';
import Addskills from './Page/Dashboard/AddSkills/addskills';
import CreateProject from './Page/Dashboard/CreateProject/CreateProject';
import ProjectDetails from './components/Blog/ProjectDetails';
import Login from './Page/Login';
import PrivateRoute from './PrivateRoute.tsx/PrivateRoute';

  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <App />,
        children: [
          {
            path: "/",
            element: <Home />,
          },
          {

            path: "/login",
            element: <Login />,

          },

          {
            path: "/blog/:id",
            loader: ({ params }: any) =>
              fetch(
                `http://localhost:5000/api/v1/singlepost/${params.id}`,
              ).then((res) => res.json()),
            element: <BlogDetails />,
          },
          {
            path:"/project/:id",
            loader:({params}:any)=> fetch(`http://localhost:5000/api/v1/singleproject/${params.id}`).then((res)=>res.json()),
            element:<ProjectDetails/>
          }
         
        ]
  },
  {
    path: "/dashboard",
    element:<PrivateRoute> <Dashboardlayout /></PrivateRoute> ,
    children: [
      {
      path: "/dashboard",
      element: <Dashboard />,
      },
      {
        path: "/dashboard/createblogs",
        element:<Createblog/>
      },
      {
        path: "/dashboard/addskills",
        element:<Addskills/>
      },
      {
        path: "/dashboard/addproject",
        element:<CreateProject/>
      }
      ]
  }

]


  );

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
    
  
  </React.StrictMode>
);
