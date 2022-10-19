// import { RouteObject } from 'react-router-dom';
import Home from '../pages/home';
import About from '../pages/about';
import React from 'react';

const router = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
    children:[
        {
            path:'/about/a',
            element:<h2>a子路由</h2>
        }
    ]
  },
  {
    path: '*',
    element: <h1>404</h1>,
  },
];
export default router;
