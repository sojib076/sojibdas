import React from 'react';
import ReactDOM from 'react-dom/client';


import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Home from './Page/Home';
import BlogDetails from './components/Blog/blogDetails';
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
            path: "/blog/:id",
            element: <BlogDetails />,
          }
        
        ]
  },

]


  );

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  
  </React.StrictMode>
);
