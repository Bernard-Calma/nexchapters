import React from 'react';

// REACT ROUTER V6
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// REDUX
import store from './store';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Register from './views/Register';
import Login from './views/Login';
import Home from './views/Home';
import MangaList from './views/MangaList';

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
    },{
      path: "home",
      element: <Home />
    },{
      path: "mangalist",
      element: <MangaList />
    },
  ],
    errorElement: <div>Error</div>
  }
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
