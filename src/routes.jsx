import { createBrowserRouter } from "react-router";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/home/home";
import Products from "./pages/products/Products";
import Cart from "./pages/cart/Cart";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
        {
            index:true,
            element:<Home></Home>
        },

        {
            path:'products',
            element:<Products></Products>
        },

        {
            path:'cart',
            element:<Cart></Cart>
        },

        {
            path:'register',
            element:<Register></Register>
        },

        {
            path:'login',
            element:<Login></Login>
        }
    ]
  },
]);

export default router;