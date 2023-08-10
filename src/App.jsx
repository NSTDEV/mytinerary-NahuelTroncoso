import React from 'react';
import Layout from './components/layouts/Layout';
import Home from './components/Pages/Home/index';
import Cities from './components/Pages/Cities/index';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  { path: '/', element: <Layout />, children: [{ path: '/', element: <Home /> }] },
  { path: '/cities', element: <Layout />, children: [{ path: '/cities', element: <Cities /> }] }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
};

export default App;