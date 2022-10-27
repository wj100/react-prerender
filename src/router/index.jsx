import React from 'react';
import Home from '../pages/Home';
import About from '../pages/About';
import Products from '../pages/products/Index';
import Details from '../pages/products/child/Details'
import Productlist from '../pages/products/child/Productlist';
import Category from '../pages/products/child/Category';
import NotFound from '../pages/NotFound';

const router = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/products/:category',
    element: <Products />,
    children: [
      { path: '', element: <Category /> },
      { path: 'list', element: <Productlist /> },
      { path: 'details', element: <Details /> },
    ],
    // children: [
    //   {
    //     path: 'fashion',
    //     element: <Fashion />,
    //     children: [
    //       { path: '', element: <Category /> },
    //       { path: 'list', element: <Productlist /> },
    //     ],
    //   },
    //   {
    //     path: 'outdoor',
    //     element: <Outdoor />,
    //     children: [
    //       { path: '', element: <Category /> },
    //       { path: 'list', element: <Productlist /> },
    //     ],
    //   },
    //   {
    //     path: 'toys',
    //     element: <Toys />,
    //     children: [
    //       { path: '', element: <Category /> },
    //       { path: 'list', element: <Productlist /> },
    //     ],
    //   },
    // ],
  },
  {
    path: '/about',
    element: <About />,
    children: [
      {
        path: '/about/a',
        element: <h2>a子路由</h2>,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
];
export default router;
