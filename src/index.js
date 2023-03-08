import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Route, Link } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Register from './views/Register';
import Login from './views/Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [{
      path: "about",
      element: <div>About Me</div>
    },{
      path: "register",
      element: <Register />
    },{
      path: "login",
      element: <Login />
    },
  ],
    errorElement: <div>Error</div>
  }
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
