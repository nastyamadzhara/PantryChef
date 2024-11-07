import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home/Home'
import Profile from './pages/Profile/Profile'
import LogIn from './pages/Log in/Log in'
import SignUp from './pages/Sign up/Sign up'
import Search from './pages/Search/Search'
import Recipe from './pages/Recipe/Recipe'

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement:<div>Error</div>
    },
    {
        path: "/profile",
        element: <Profile />,
    },
    {
        path: "/login",
        element: <LogIn />,
    },
    {
        path: "/signup",
        element: <SignUp />,
    },
    {
        path: "/search",
        element: <Search />,
    },
    {
        path: "/recipe",
        element: <Recipe />,
    },
])

root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
