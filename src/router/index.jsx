// import { RouteObject } from 'react-router-dom';
import Home from '../pages/home';
import About from '../pages/about';
import NotFound from '../pages/NotFound';
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
    element: <NotFound/>,
  },
];
export default router;
