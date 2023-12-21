import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard/Dashboard";
import CreateTask from "../components/CreateTask";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/signup',
            element: <SignUp></SignUp>
        }
      ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
    },
    {
      path: 'createTask',
      element: <PrivateRoute><CreateTask></CreateTask></PrivateRoute>
    }
  ]);