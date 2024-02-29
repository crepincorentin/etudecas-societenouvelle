import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Page from './pages/Page';

const route = createBrowserRouter([
  {
    path: '/',
    element: <Page />,
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={route}>
    <App />
  </RouterProvider>
);


