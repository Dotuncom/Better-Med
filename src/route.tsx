import { createBrowserRouter, type RouteObject } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import RootLayout from "./layout/RootLayout";
import DynamicLayout from "./layout/DynamicLayout";
import Service from "./pages/Service";
import Faqs from "./pages/Faqs";
import Blog from "./pages/Blog";
import Products from "./features/products/ProductDetails";
import ProductDetails from "./features/products/Product";


const routes:RouteObject[] = [
  {
    path: "/",
    errorElement: <NotFound />,
    element: <RootLayout />,
    children: [
      { index: true, 
        element: <Home /> },
        
      
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
            path:'/products',
            element:<Products/>
          },
           {
            path:'/products/:productId',
            element:<ProductDetails/>
          }

        ]
      },
    ],
  },
];
export const router = createBrowserRouter(routes);

