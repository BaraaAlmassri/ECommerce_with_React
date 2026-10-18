import { createBrowserRouter } from "react-router";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/home/Home";
import AuthLayout from "./layouts/AuthLayout";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Resetpassword from "./pages/reset/Resetpassword";
import SendCode from "./pages/code/SendCode";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children :[
        {
            index:true , 
            element : <Home></Home>
        }
    ]
  },
  {
    element : <AuthLayout></AuthLayout>,
    children:[
        {
            path:'/register',
            element:<Register></Register>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/resetpassword',
            element:<Resetpassword></Resetpassword>
        },
        {
            path:'/code',
            element:<SendCode></SendCode>
        }
    ]
  }
]);


export default router;