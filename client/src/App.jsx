import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Layout from './components/Layout';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import PostDetail from './pages/PostDetail';
import Register from './pages/Register';
import Login from './pages/Login';
import UserProfile from './pages/UserProfile';
import Authors from './pages/Authors';
import EditPost from './pages/EditPost';
import CreatePost from './pages/CreatePost';
import CategoryPosts from './pages/CategoryPosts';
import AuthorPosts from './pages/AuthorPosts';
import Dashboard from './pages/Dashboard';
import Logout from './pages/Logout';


const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <Home /> },
            { path: 'posts/:id', element: <PostDetail /> },
            { path: 'register', element: <Register /> },
            { path: 'login', element: <Login /> },
            { path: 'profile/:id', element: <UserProfile /> },
            { path: 'authors', element: <Authors /> },
            { path: 'posts/:id/edit', element: <EditPost /> },
            { path: 'create', element: <CreatePost /> },
            { path: 'post/categories/:category', element: <CategoryPosts /> },
            { path: 'post/users/:id', element: <AuthorPosts /> },
            { path: 'myposts/:id', element: <Dashboard /> },
            { path: 'logout', element: <Logout /> },
        ]
    }
])

export default function App() {
    return (
        <RouterProvider router={router} />
    )
}