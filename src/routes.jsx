import { createBrowserRouter } from "react-router";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/home/Home";
import Products from "./pages/products/Products";
import Cart from "./pages/cart/Cart";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import ProductDetails from "./pages/products/ProductDetails";
import ProtectedRouter from "./ProtectedRouter";

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