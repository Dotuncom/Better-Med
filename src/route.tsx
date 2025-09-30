import { createBrowserRouter, type RouteObject } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import RootLayout from "./layout/RootLayout";
import DynamicLayout from "./layout/DynamicLayout";
import Service from "./pages/Service";
import Faqs from "./pages/Faqs";
import Blog from "./pages/Blog";
// import Products from "./features/medical-products/Products";
import ProductDetails from "./features/medical-products/ProductDetails";
import Shop from "./pages/Shop";
import CartPage from "./pages/CartPage";
import MainContent from "./features/medical-products/MainContent";
import Checkout from "./pages/Checkout";

const routes:RouteObject[] = [
  {
    path: "/",
    errorElement: <NotFound />,
    element: <RootLayout />,
    children: [
      { index: true, 
        element: <Home /> },
       
      ],
    },
      {
        element:<DynamicLayout/>,
        children:[
          {path:'/about',
            element:<About/>
          },
          {path:'/services',
           element:<Service/>
          },
          {path:'/faqs',
           element:<Faqs/>
          },
          
          {
            path:'/blog',
            element:<Blog/>
          },
         
         {
          path:'/products/:id',
          element:<ProductDetails/>
         }
           ,
           {
          path:'/cart',
          element:<CartPage/>
         }
           ,
          
           

        ],
        
        
  },
   {
          path:'/shop',
          element:<Shop/>
        },

        {
          path:'/sho',
          element:<MainContent/>
         },
          {
          path:'/checkout',
          element:<Checkout/>
         },


];
export const router = createBrowserRouter(routes);

