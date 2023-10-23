import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Instructor from "../Pages/Instructor/Instructor";
import DashBoard from "../Layout/DashBoard";
import MySelectedClasses from "../Pages/DashBoard/MySelectedClasses/MySelectedClasses";

import Classes from "../Pages/Classes/Classes";
import AddAClass from "../Pages/DashBoard/AddAClass/AddAClass";
import MyClasses from "../Pages/DashBoard/MyClasses/MyClasses";
import InstructorRoutes from "./InstructorRoutes";
import ManageUsers from "../Pages/DashBoard/ManageUser/ManageUser";

import UserHome from "../Pages/DashBoard/UserHome/UserHome";
import PrivateRoute from "./PrivateRoute";
import ManageClasses from "../Pages/DashBoard/ManageClasses/ManageClasses";
import EnrolledClasses from "../Pages/DashBoard/EnrolledClasses/EnrolledClasses";
import AdminRoute from "./AdminRoute";
import Payment from "../Pages/Payment/Payment";
import CheckOutForm from "../Pages/CheckOutForm/CheckOutForm";
import Blog from "../Pages/Blog/Blog";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path : '/',
                element: <Home></Home>
                
            },
            {
                path : 'login',
                element: <Login></Login>
                
            },
            {
                path : 'signup',
                element: <SignUp></SignUp>
                
            },
            {
                path : 'instructors',
                element: <Instructor></Instructor>
                
            },
            {
                path : 'classes',
                element: <Classes></Classes>
                
            },
            {
                path : 'blog',
                element: <Blog></Blog>
                
            }
        ],

        
    },
    {
        path:"dashboard",
        element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
        children: [
            {
                path: 'home',
                element:<UserHome></UserHome>
              },
            
            {
                path:'manageusers',
                element:<AdminRoute><ManageUsers></ManageUsers></AdminRoute>
              },
            {
                path:'selectedclasses',
                element:<MySelectedClasses></MySelectedClasses>
            },
            {
                path:'enrolledclasses',
                element:<EnrolledClasses></EnrolledClasses>
            },
            {
                path:'addaclass',
                element:<InstructorRoutes><AddAClass></AddAClass></InstructorRoutes>
            },
            {
                path:'myclasses',
                element:<InstructorRoutes><MyClasses></MyClasses></InstructorRoutes>
            },
            {
                path:'manageClasses',
                element:<AdminRoute><ManageClasses></ManageClasses></AdminRoute>
            },
            {
                path:'payment/:id',
                element:<Payment></Payment>
            },
            {
                path:'CheckOutForm',
                element:<CheckOutForm></CheckOutForm>
            }
        ]
    }
]);