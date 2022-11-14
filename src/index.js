import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createBrowserRouter,
    RouterProvider} from 'react-router-dom';
import PlaceToStay from './PlaceToStay';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: 'placetostay',
        element: <PlaceToStay />
    },
])


ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
);