import { createBrowserRouter } from "react-router";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/home/Home";
import Products from "./pages/products/Products";
import Cart from "./pages/cart/Cart";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import ProductDetails from "./pages/products/ProductDetails";
import ProtectedRouter from "./ProtectedRouter";
import Checkout from "./pages/register/checkout/Checkout";
import ProfileLayout from "./pages/profile/ProfileLayout";
import ProfileInfo from "./pages/profile/ProfileInfo";
import ProfileOrders from "./pages/profile/ProfileOrders";

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
                path:'product/:id',
                element:<ProductDetails></ProductDetails>
        },

        {
            path:'cart',
            element:<ProtectedRouter><Cart></Cart></ProtectedRouter>
        },
        {
            path:'checkout',
            element:<ProtectedRouter><Checkout></Checkout></ProtectedRouter>
        },
        {
            path:'profile',
            element:<ProtectedRouter><ProfileLayout></ProfileLayout></ProtectedRouter>,
            children:[
                {
                    index:true,
                    element:<ProfileInfo></ProfileInfo>
                },
                {
                    path:'orders',
                    element:<ProfileOrders></ProfileOrders>

                }
            ]
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